# Next.js의 라우팅 시스템 비교

---

## 1. Pages Router 설정 방식 (기존 방식)

### 기본 원리

- **파일 기반 라우팅:** 파일 경로가 곧 URL 경로가 된다.
- **클라이언트 컴포넌트 기반:** 모든 페이지 컴포넌트는 기본적으로 클라이언트 컴포넌트로 동작한다.
- **데이터 페칭 함수:** `getStaticProps`, `getServerSideProps`, `getInitialProps`를 통해 데이터를 불러온다.

### 디렉토리 구조 및 URL 매핑

```text
pages/
├── index.js         # → /
├── about.js         # → /about
├── contact.js       # → /contact
├── blog/
│   ├── index.js     # → /blog
│   └── [slug].js    # → /blog/:slug (동적 경로)
└── products/
    ├── index.js     # → /products
    └── [id].js      # → /products/:id (동적 경로)
```

### 파일 유형 및 특수 파일

| 파일명/패턴      | 역할                        | 예시/설명                       |
|------------------|-----------------------------|----------------------------------|
| 일반 JS/JSX/TS/TSX | 페이지 컴포넌트             | about.js → /about                |
| _app.js          | 공통 레이아웃/전역 상태      | 글로벌 CSS, 레이아웃 구성         |
| _document.js     | HTML 문서 구조 커스터마이징  | <html>, <body> 속성 추가         |
| _error.js        | 커스텀 에러 페이지           | 500 에러 페이지                  |
| 404.js           | 커스텀 404 페이지            | 페이지를 찾을 수 없을 때          |
| [param].js       | 동적 라우트                  | [id].js → /1, /2 등              |
| [...slug].js     | 캐치올 라우트                | /posts/2020/01 등 다중 세그먼트   |

### 데이터 페칭 방식

```jsx
// pages/posts/[id].js
export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

// 정적 생성 (빌드 시 데이터 페칭)
export async function getStaticProps({ params }) {
  const post = await fetchPost(params.id);
  return {
    props: { post },
    revalidate: 60, // ISR: 60초마다 재생성 가능
  };
}

// 가능한 경로 미리 생성
export async function getStaticPaths() {
  const posts = await fetchPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
}
```

### 라우팅 처리 및 네비게이션

```jsx
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">홈</Link>
      <Link href="/about">소개</Link>
      <button onClick={() => router.push('/contact')}>문의하기</button>
      <Link href={`/posts/${postId}`}>게시물 보기</Link>
      <Link href="/search?keyword=react">React 검색</Link>
    </nav>
  );
}
```

### 장단점

#### 장점

- 단순하고 직관적인 파일 기반 라우팅을 제공한다.
- 적은 설정으로 빠르게 시작할 수 있다.
- 튜토리얼과 레퍼런스 자료가 풍부하다.
- 프로덕션에서 검증된 안정성을 가진다.

#### 단점

- 복잡한 레이아웃 구조 구현이 어렵다.
- 중첩된 레이아웃에서 상태 공유가 제한된다.
- 페이지 간 이동 시 컴포넌트 상태가 손실된다.
- 코드 분할의 유연성이 제한된다.

---

## 2. App Router 설정 방식 (Next.js 13+)

### 기본 원리

- **폴더 기반 라우팅:** 폴더 구조가 URL 경로를 결정합니다.
- **역할별 파일:** 특수 파일명(`page.js`, `layout.js` 등)이 각 역할을 담당합니다.
- **서버 컴포넌트 우선:** 모든 컴포넌트는 기본적으로 서버 컴포넌트로 동작합니다.
- **중첩 레이아웃:** 폴더별로 레이아웃을 중첩할 수 있습니다.

### 디렉토리 구조 및 역할별 파일

```text
app/
├── layout.js        # 루트 레이아웃 (필수)
├── page.js          # 홈페이지 (/) 라우트
├── favicon.ico      # 파비콘 (자동 처리)
├── globals.css      # 전역 스타일
├── about/
│   └── page.js      # /about 라우트
├── blog/
│   ├── layout.js    # 블로그 전용 레이아웃
│   ├── page.js      # /blog 라우트
│   └── [slug]/      # 동적 세그먼트
│       ├── page.js  # /blog/:slug 라우트
│       └── error.js # 블로그 게시물 에러 처리
└── dashboard/
    ├── layout.js    # 대시보드 레이아웃
    ├── page.js      # /dashboard 라우트
    ├── loading.js   # 대시보드 로딩 UI
    └── admin/
        └── page.js  # /dashboard/admin 라우트
```

### 주요 특수 파일 및 용도

| 파일명         | 역할                | 특징/설명                                      |
|----------------|---------------------|------------------------------------------------|
| page.js        | 해당 경로의 UI      | URL로 직접 접근 가능한 유일한 파일이다.         |
| layout.js      | 중첩 레이아웃       | 여러 페이지에서 공유, 상태를 보존하는 UI 쉘이다.|
| loading.js     | 로딩 UI             | React Suspense 기반 자동 로딩 상태를 제공한다.  |
| error.js       | 에러 UI             | React Error Boundary 기반 자동 에러 처리를 한다.|
| not-found.js   | 404 페이지          | 리소스를 찾을 수 없을 때 표시되는 UI이다.       |
| route.js       | API 엔드포인트      | GET, POST 등 HTTP 메서드별 핸들러를 정의한다.   |
| template.js    | 특수 레이아웃       | 매번 새로운 인스턴스를 생성한다.                |

### 서버/클라이언트 컴포넌트 구분

```jsx
// app/profile/page.js (서버 컴포넌트)
import { getUser } from '@/lib/api';
import ClientProfile from './client-profile';

export default async function ProfilePage({ params }) {
  const user = await getUser(params.id);
  return (
    <div>
      <h1>{user.name}의 프로필</h1>
      <ClientProfile user={user} />
    </div>
  );
}

// client-profile.js (클라이언트 컴포넌트)
'use client';
import { useState } from 'react';

export default function ClientProfile({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div>
      {isEditing ? (
        <button onClick={() => setIsEditing(false)}>취소</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>편집</button>
      )}
    </div>
  );
}
```

### 데이터 페칭 방식

데이터 페칭은 API 서버에서 네트워크를 통해 불러와 Next.js 애플리케이션(페이지 렌더링 또는 빌드)에서 사용할 수 있도록 만드는 모든 과정을 의미한다.

```jsx
// app/products/[id]/page.js
export default async function ProductPage({ params }) {
  const product = await fetch(`https://api.example.com/products/${params.id}`, {
    next: { revalidate: 3600 },
  }).then(res => res.json());
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>가격: {product.price}</p>
    </div>
  );
}

// 정적 경로 생성 (getStaticPaths 대체)
export async function generateStaticParams() {
  const products = await fetch('https://api.example.com/products')
    .then(res => res.json());
  return products.map((product) => ({ id: product.id.toString() }));
}
```

### 메타데이터 처리

사용자에게 페이지 본문 내용으로 직접적으로 보이지는 않지만, 검색 엔진 최적화(SEO), 소셜 미디어 공유 시 미리보기 카드 생성, 브라우저 탭의 제목 표시 등에 보여주기 위한 내용을 설정하는 것으로 이를 통해 검색 최적화를 이룰 수 있다.

```jsx
// app/blog/[slug]/page.js
import { getPost } from '@/lib/api';

// 정적 메타데이터
export const metadata = {
  openGraph: { type: 'article' },
};

// 동적 메타데이터
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [{ url: post.coverImage }] },
  };
}
```

### 라우팅 처리 및 네비게이션

라우팅 처리 및 네비게이션은 사용자가 웹 애플리케이션 내에서 다른 페이지나 콘텐츠로 이동하는 과정을 관리하고 실행하는 것을 의미

```jsx
// app/components/navigation.js
'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav>
      <Link href="/" className={pathname === '/' ? 'active' : ''}>홈</Link>
      <Link href="/dashboard" className={pathname.startsWith('/dashboard') ? 'active' : ''}>대시보드</Link>
      <button onClick={() => router.push('/settings')}>설정</button>
      <button onClick={() => router.refresh()}>새로고침</button>
      <button onClick={() => router.back()}>뒤로가기</button>
    </nav>
  );
}
```

### 병렬 라우트 (Parallel Routes)

병렬 라우트는 Next.js App Router에서 하나의 레이아웃 내에 여러 개의 독립적인 "슬롯(Slot)"을 정의하고, 동일한 URL에서 이 슬롯들에 해당하는 페이지 또는 컴포넌트들을 동시에 렌더링할 수 있게 해주는 기능

```text
app/
├── layout.js
├── page.js
├── @team/       # 병렬 라우트 (동일 URL에 표시)
│   ├── page.js  # /에서 team 슬롯으로 로드
│   └── loading.js
└── @analytics/  # 병렬 라우트 (동일 URL에 표시)
    └── page.js  # /에서 analytics 슬롯으로 로드
```

```jsx
// app/layout.js
export default function Layout({ children, team, analytics }) {
  return (
    <div>
      {children}
      <div className="sidebar">{team}</div>
      <div className="analytics-panel">{analytics}</div>
    </div>
  );
}
```

### 인터셉팅 라우트 (Intercepting Routes)

특정 경로에서 다른 경로로 클라이언트 측 네비게이션(링크 클릭 등)이 발생할 때, 원래의 목적지 페이지로 바로 이동하는 대신 중간에 다른 페이지를 가로채서 보여주는 기능

```text
app/
├── feed/
│   └── page.js           # /feed
└── photo/
    ├── [id]/
    │   └── page.js       # /photo/123
    └── (.)[id]/          # 인터셉팅 라우트
        └── page.js       # /feed에서 /photo/123 인터셉트
```

---

### 장단점

#### 장점

- React 서버 컴포넌트 지원으로 성능을 향상한다.
- 중첩 레이아웃으로 효율적인 UI 구성을 한다.
- 자동 로딩 및 에러 상태 처리를 지원한다.
- 직관적인 데이터 페칭과 캐싱을 제공한다.
- 상태 보존형 레이아웃으로 더 나은 UX를 제공한다.
- 병렬 및 인터셉팅 라우트 등 고급 라우팅 패턴을 지원한다.

#### 단점

- 새로운 기술로 학습 곡선이 존재한다.
- 서버/클라이언트 컴포넌트 구분에 주의해야 한다.
- API 변경 가능성이 있다.
- 복잡한 프로젝트에서 디버깅이 더 어렵다.

---

## 3. 두 라우팅 시스템의 주요 차이점 요약

| 특성             | Pages Router                | App Router                                 |
|------------------|-----------------------------|---------------------------------------------|
| 기본 디렉토리     | /pages                      | /app                                        |
| 라우팅 기반       | 파일명                      | 폴더명                                      |
| 컴포넌트 타입     | 클라이언트 컴포넌트         | 서버 컴포넌트 (기본값)                      |
| 레이아웃 구현     | _app.js (전역 레이아웃만)   | 중첩 가능한 layout.js                       |
| 데이터 페칭       | getStaticProps, getServerSideProps | 컴포넌트 내 직접 비동기 함수, fetch() |
| 캐싱 제어         | revalidate 옵션             | fetch() 옵션, Route Segment Config           |
| 경로 생성         | getStaticPaths              | generateStaticParams                        |
| 메타데이터        | Head 컴포넌트               | metadata 객체, generateMetadata 함수         |
| 로딩 상태         | 수동 구현                   | loading.js 파일 (Suspense 기반)              |
| 에러 처리         | _error.js, getStaticProps 내부 | error.js 파일 (Error Boundary)           |
| API 라우트        | /pages/api/*.js             | /app/api/route.js                           |
| 상태 관리         | 페이지 전환 시 상태 재설정   | 레이아웃 내 상태 보존                        |
| 코드 분할         | 페이지 단위                 | 레이아웃 및 페이지 단위                      |
| 고급 라우팅       | 제한적                      | 병렬/인터셉팅 라우트 지원                    |

---

## 결론

- **Pages Router**는 단순하고 직관적인 접근 방식으로, 작은 프로젝트나 빠른 프로토타이핑에 적합하다. 많은 개발자가 익숙하고 다양한 자료와 예제가 있어 진입 장벽이 낮다.
- **App Router**는 React 서버 컴포넌트, 중첩 레이아웃, 고급 라우팅 패턴 등을 활용해 더 복잡한 애플리케이션을 구축하는 데 적합하다. 초기 설정과 개념 이해에 시간이 필요하지만, 확장성이 뛰어나고 성능 최적화에 유리하다.
- 두 시스템은 동일한 Next.js 애플리케이션 내에서 공존할 수 있으므로, 기존 Pages Router 프로젝트에서도 점진적으로 App Router로 마이그레이션할 수 있다. 각자의 장점을 유지하면서 최신 기능을 활용할 수 있다.