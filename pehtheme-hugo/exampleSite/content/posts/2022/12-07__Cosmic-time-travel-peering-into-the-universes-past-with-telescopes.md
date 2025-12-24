---
title: "Bảo mật cơ bản: CORS, JWT và HTTPS"
date: 2022-12-07T09:00:00+07:00
slug: "bao-mat-co-ban-cors-jwt-https"
description: "Những lưu ý tối thiểu khi làm API: CORS đúng, JWT an toàn hơn, bật HTTPS."
image: 'images/Bảo mật cơ bản CORS, JWT và HTTPS.png'
categories:
  - security
tags:
  - security
  - cors
  - jwt
  - https
  - web
  - api
draft: false
---

## 1. Giới thiệu

Trong các ứng dụng web hiện đại, đặc biệt là hệ thống client-server, API và microservices, bảo mật không còn là phần bổ sung mà là yêu cầu bắt buộc. Các lỗ hổng bảo mật có thể dẫn đến rò rỉ dữ liệu, chiếm quyền truy cập hoặc phá hoại hệ thống.

Ba khái niệm nền tảng nhưng thường bị hiểu sai trong bảo mật web là:

- CORS (Cross-Origin Resource Sharing)
- JWT (JSON Web Token)
- HTTPS (HTTP Secure)

Bài viết này trình bày vai trò, nguyên lý hoạt động và mối quan hệ giữa ba cơ chế trên trong việc bảo vệ ứng dụng web.

## 2. Tổng quan kiến trúc bảo mật Web

{{< img src="images/kien-truc-bao-mat-web.png" alt="Kiến trúc bảo mật web" >}}

Trong kiến trúc web phổ biến:

- Trình duyệt (Browser) gửi request đến server
- Request được kiểm soát bởi CORS
- Người dùng được xác thực và phân quyền bằng JWT
- Dữ liệu truyền tải được mã hóa bằng HTTPS

Mỗi thành phần giải quyết một lớp bảo mật khác nhau.

## 3. CORS - Kiểm soát truy cập giữa các nguồn

### 3.1. CORS là gì?

CORS (Cross-Origin Resource Sharing) là cơ chế bảo mật của trình duyệt, dùng để kiểm soát việc một website có được phép truy cập tài nguyên từ website khác hay không.

Ví dụ:

- Frontend chạy tại https://frontend.com
- Backend API tại https://api.backend.com

Trình duyệt sẽ chặn request nếu server không cho phép origin tương ứng.

### 3.2. Vì sao cần CORS?

CORS giúp ngăn chặn:

- Tấn công Cross-Site Request Forgery (CSRF)
- Đánh cắp dữ liệu thông qua script từ domain độc hại

Lưu ý: CORS là cơ chế bảo vệ của trình duyệt, không phải của server.

### 3.3. Cơ chế hoạt động của CORS

{{< img src="images/co-che-hoat-ong-cua-cors.png" alt="Cơ chế hoạt động của CORS" >}}

Quy trình cơ bản:

- Browser gửi request kèm header Origin
- Server trả về các header CORS:
  - Access-Control-Allow-Origin
  - Access-Control-Allow-Methods
  - Access-Control-Allow-Headers
- Browser quyết định cho phép hay chặn request

Với request phức tạp, browser gửi preflight request (OPTIONS) trước.

### 3.4. Sai lầm thường gặp với CORS

- Dùng Access-Control-Allow-Origin: * cho API có xác thực
- Nhầm lẫn CORS là cơ chế xác thực
- Cấu hình CORS ở frontend thay vì backend

## 4. JWT - Xác thực và phân quyền người dùng

### 4.1. JWT là gì?

JWT (JSON Web Token) là một chuẩn mở dùng để truyền thông tin xác thực giữa client và server một cách an toàn và gọn nhẹ.

JWT thường được sử dụng trong:

- REST API
- Microservices
- Single Page Application (SPA)

### 4.2. Cấu trúc JWT

JWT gồm 3 phần, phân tách bằng dấu chấm (.):

Header.Payload.Signature

- Header: loại token và thuật toán ký
- Payload: thông tin người dùng (claims)
- Signature: chữ ký đảm bảo tính toàn vẹn

### 4.3. Quy trình xác thực bằng JWT

{{< img src="images/quy-trinh-xac-thuc-bang-jwt.png" alt="Quy trình xác thực bằng JWT" >}}

- Người dùng đăng nhập
- Server xác thực và tạo JWT
- Client lưu JWT (cookie hoặc localStorage)
- Client gửi JWT trong header Authorization
- Server kiểm tra chữ ký và quyền truy cập

### 4.4. Ưu điểm và hạn chế của JWT

Ưu điểm:

- Stateless (không cần lưu session)
- Dễ mở rộng
- Phù hợp hệ thống phân tán

Hạn chế:

- Token bị lộ khó thu hồi
- Payload không được mã hóa (chỉ ký)
- Phải kết hợp HTTPS để an toàn

## 5. HTTPS - Bảo mật kênh truyền dữ liệu

### 5.1. HTTPS là gì?

HTTPS (HTTP Secure) là giao thức HTTP kết hợp với TLS/SSL, nhằm:

- Mã hóa dữ liệu
- Đảm bảo tính toàn vẹn
- Xác thực server

### 5.2. HTTPS bảo vệ những gì?

- Ngăn chặn nghe lén (Man-in-the-Middle)
- Bảo vệ thông tin đăng nhập
- Đảm bảo dữ liệu không bị thay đổi

### 5.3. Quy trình TLS Handshake

- Client gửi yêu cầu kết nối an toàn
- Server gửi chứng chỉ số (certificate)
- Hai bên trao đổi khóa mã hóa
- Bắt đầu truyền dữ liệu được mã hóa

## 6. Mối quan hệ giữa CORS, JWT và HTTPS

| Thành phần | Vai trò |
| --- | --- |
| CORS | Kiểm soát ai được phép gọi API |
| JWT | Xác thực và phân quyền người dùng |
| HTTPS | Bảo mật dữ liệu trên đường truyền |

Ba cơ chế này bổ trợ cho nhau, không thay thế cho nhau.

## 7. Những sai lầm bảo mật phổ biến

- Sử dụng JWT nhưng không bật HTTPS
- Cho phép CORS quá rộng
- Lưu JWT không an toàn
- Nhầm JWT là cơ chế mã hóa
- Không kiểm tra thời hạn token

## 8. Kết luận

CORS, JWT và HTTPS là ba trụ cột bảo mật cơ bản trong ứng dụng web hiện đại. Hiểu đúng và triển khai đúng các cơ chế này giúp hệ thống:

- An toàn hơn trước các tấn công phổ biến
- Dễ mở rộng
- Đáp ứng yêu cầu bảo mật thực tế

Đối với sinh viên và lập trình viên backend, đây là kiến thức nền tảng không thể thiếu trước khi tiếp cận các kỹ thuật bảo mật nâng cao hơn.
