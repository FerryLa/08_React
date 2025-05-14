# JSON Server 설정 가이드

## 1. 설치 방법

```bash
npm install -g json-server
```

## 2. 데이터베이스 설정

`db.json` 파일을 프로젝트 루트 디렉토리에 생성하고 다음 내용을 추가합니다:

```json
{
  "products": [
    { "id": 1, "name": "iPhone 15", "price": 1500000, "stock": 10 },
    { "id": 2, "name": "Galaxy S24", "price": 1300000, "stock": 15 },
    { "id": 3, "name": "MacBook Pro", "price": 3000000, "stock": 5 }
  ],
  "orders": [
    { "id": 1, "productId": 1, "quantity": 2, "status": "pending" },
    { "id": 2, "productId": 2, "quantity": 1, "status": "shipped" }
  ],
  "users": [
    { "id": 1, "name": "Admin", "role": "admin", "email": "admin@example.com" },
    { "id": 2, "name": "Alice", "role": "user", "email": "alice@example.com" }
  ],
  "carts": [{ "id": 1, "userId": 2, "productId": 3, "quantity": 1 }]
}
```

## 3. 서버 실행

```bash
json-server --watch db.json --port 4000
```

### Watch 모드 설명

`--watch` 옵션을 사용하면 다음과 같은 이점이 있습니다:

- `db.json` 파일의 실시간 모니터링
- 파일 변경 시 자동 리로드
- 서버 재시작 없이 데이터 변경사항 즉시 반영

## 4. API 엔드포인트

| 메소드 | 엔드포인트    | 설명           |
| ------ | ------------- | -------------- |
| GET    | /products     | 모든 상품 조회 |
| POST   | /products     | 상품 추가      |
| PATCH  | /products/:id | 상품 일부 수정 |
| DELETE | /products/:id | 상품 삭제      |
| GET    | /orders       | 주문 목록 조회 |
