---
title: "Hồ sơ"
date: 2024-12-22T09:00:00+07:00
image: ''
draft: false
---

<div class="not-prose rounded-3xl bg-zinc-100 p-6 lg:p-10">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 profile-grid">
    <div class="flex items-center">
      <img class="w-20 h-20 rounded-full bg-white" style="object-fit: cover; object-position: 30% 30%;" src="/images/ảnh biển2.png" alt="NGUYỄN TẤN TÀI">
    </div>
    <div>
      <p class="text-xs uppercase text-zinc-500">Hồ sơ cá nhân</p>
      <h1 class="text-4xl font-bold mt-2">NGUYỄN TẤN TÀI</h1>
      <p class="text-zinc-500 mt-3">
        Sinh viên CNTT định hướng backend & lập trình mạng. Mình ưu tiên thiết kế API ổn định, log rõ ràng,
        tối ưu timeout/retry và bảo mật kết nối khi làm việc với TCP/UDP, HTTP và WebSocket.
      </p>
      <div class="flex flex-wrap gap-3 mt-4 text-sm">
        <span class="rounded-full border px-4 py-1 bg-white">Networking</span>
        <span class="rounded-full border px-4 py-1 bg-white">Java</span>
        <span class="rounded-full border px-4 py-1 bg-white">JavaScript</span>
        <span class="rounded-full border px-4 py-1 bg-white">REST & WebSocket</span>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 text-sm">
    <div class="rounded-2xl border bg-white p-4">
      <p class="text-xs uppercase text-zinc-500">Định hướng</p>
      <p class="font-semibold mt-1">Backend & Network</p>
    </div>
    <div class="rounded-2xl border bg-white p-4">
      <p class="text-xs uppercase text-zinc-500">Ngôn ngữ</p>
      <p class="font-semibold mt-1">Java, JavaScript</p>
    </div>
    <div class="rounded-2xl border bg-white p-4">
      <p class="text-xs uppercase text-zinc-500">Chủ đề</p>
      <p class="font-semibold mt-1">TCP/UDP, HTTP, WebSocket</p>
    </div>
    <div class="rounded-2xl border bg-white p-4">
      <p class="text-xs uppercase text-zinc-500">Mục tiêu</p>
      <p class="font-semibold mt-1">Hệ thống ổn định & dễ giám sát</p>
    </div>
  </div>
</div>

## Giới thiệu

Mục tiêu của mình là hiểu sâu cơ chế giao tiếp mạng và triển khai hệ thống có tính ổn định cao.
Mình chú trọng viết code rõ ràng, có log, có xử lý lỗi và đo đạc hiệu năng để tối ưu khi số kết nối tăng.

Các học phần và đồ án mình đã làm tập trung vào:
- Socket TCP/UDP, timeout/retry/backoff.
- REST API với Spring Boot và Express.
- Bảo mật cơ bản: CORS, JWT, HTTPS.
- Giao tiếp realtime với WebSocket.

## Dự án nổi bật

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6">
  <article class="rounded-2xl border bg-zinc-100 p-6">
    <h3 class="text-xl font-semibold">Chat TCP đa luồng (Java)</h3>
    <p class="text-sm text-zinc-500 mt-3">Server TCP hỗ trợ nhiều client, broadcast theo phòng, log theo phiên và xử lý ngắt kết nối.</p>
    <p class="text-xs text-zinc-500 mt-3">Công nghệ: Java, Socket, ExecutorService</p>
    <a class="flex items-center mt-3 text-sm font-semibold hover:underline" href="https://github.com/TanTai311/chat-tcp" target="_blank" rel="noopener">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
      <span class="ml-2">GitHub</span>
    </a>
  </article>
  <article class="rounded-2xl border bg-zinc-100 p-6">
    <h3 class="text-xl font-semibold">REST API quản lý bài viết</h3>
    <p class="text-sm text-zinc-500 mt-3">CRUD, phân trang, validation, trả lời chuẩn JSON, log request/response rõ ràng.</p>
    <p class="text-xs text-zinc-500 mt-3">Công nghệ: Spring Boot, JPA, MySQL</p>
    <a class="flex items-center mt-3 text-sm font-semibold hover:underline" href="https://github.com/TanTai311/blog-api" target="_blank" rel="noopener">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
      <span class="ml-2">GitHub</span>
    </a>
  </article>
  <article class="rounded-2xl border bg-zinc-100 p-6">
    <h3 class="text-xl font-semibold">Realtime chat WebSocket</h3>
    <p class="text-sm text-zinc-500 mt-3">Kết nối hai chiều, tự reconnect, phân kênh chat và log sự kiện.</p>
    <p class="text-xs text-zinc-500 mt-3">Công nghệ: JavaScript, WebSocket</p>
    <a class="flex items-center mt-3 text-sm font-semibold hover:underline" href="https://github.com/TanTai311/ws-chat" target="_blank" rel="noopener">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
      <span class="ml-2">GitHub</span>
    </a>
  </article>
  <article class="rounded-2xl border bg-zinc-100 p-6">
    <h3 class="text-xl font-semibold">Express API & JWT</h3>
    <p class="text-sm text-zinc-500 mt-3">Router tách module, middleware xác thực JWT, log request và CORS đúng chuẩn.</p>
    <p class="text-xs text-zinc-500 mt-3">Công nghệ: Node.js, Express, JWT</p>
    <a class="flex items-center mt-3 text-sm font-semibold hover:underline" href="https://github.com/TanTai311/express-starter" target="_blank" rel="noopener">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
      <span class="ml-2">GitHub</span>
    </a>
  </article>
</div>

## Chứng chỉ

<div class="not-prose grid grid-cols-1 md:grid-cols-3 gap-6">
  <figure class="rounded-2xl border bg-zinc-100 p-6 md:col-span-2">
    <img class="rounded-xl" src="/images/cert-main.svg" alt="Chứng chỉ chuyên sâu">
    <figcaption class="text-sm text-center mt-3">Networking Fundamentals (mẫu)</figcaption>
  </figure>
  <figure class="rounded-2xl border bg-zinc-100 p-6">
    <img class="rounded-xl" src="/images/cert-java.svg" alt="Chứng chỉ Java">
    <figcaption class="text-sm text-center mt-3">Java SE Professional (mẫu)</figcaption>
  </figure>
  <figure class="rounded-2xl border bg-zinc-100 p-6">
    <img class="rounded-xl" src="/images/cert-js.svg" alt="Chứng chỉ JavaScript">
    <figcaption class="text-sm text-center mt-3">JavaScript Backend (mẫu)</figcaption>
  </figure>
  <figure class="rounded-2xl border bg-zinc-100 p-6">
    <img class="rounded-xl" src="/images/cert-sec.svg" alt="Chứng chỉ bảo mật">
    <figcaption class="text-sm text-center mt-3">Security & API (mẫu)</figcaption>
  </figure>
</div>

## Liên hệ

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6">
  <div class="rounded-2xl border bg-zinc-100 p-6">
    <h3 class="text-xl font-semibold mb-4">Kênh chính</h3>
    <a class="flex items-center text-sm font-semibold hover:underline" href="https://github.com/TanTai311" target="_blank" rel="noopener">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
      <span class="ml-2">GitHub: TanTai311</span>
    </a>
    <p class="text-sm text-zinc-500 mt-3">Email: nguyentantai.dev@gmail.com</p>
    <p class="text-sm text-zinc-500 mt-3">Điện thoại: 0900 000 000</p>
  </div>
  <div class="rounded-2xl border bg-zinc-100 p-6">
    <h3 class="text-xl font-semibold mb-4">Thông tin nhanh</h3>
    <p class="text-sm text-zinc-500">Khu vực: Việt Nam</p>
    <p class="text-sm text-zinc-500 mt-3">Sẵn sàng: Thực tập/part-time backend</p>
    <p class="text-sm text-zinc-500 mt-3">Ưu tiên: Dự án liên quan networking & API</p>
  </div>
</div>
