# 🚀 pehtheme-hugo

Một theme Hugo custom được xây dựng cho blog cá nhân, nơi chia sẻ bài viết blog, resume, portfolio và các thông tin chuyên môn khác.

## 📝 Giới thiệu

**pehtheme-hugo** là một Hugo theme đẹp và responsive, được xây dựng bằng **Tailwind CSS** như một phần của đồ án môn **Lập trình mạng máy tính** tại Trường Đại học Công nghệ TP.HCM (HUTECH).

## 🎯 Mục đích

Theme này được thiết kế để giúp bạn xây dựng một trang web cá nhân chuyên nghiệp với các tính năng:
- 📝 Viết và chia sẻ bài blog
- 👤 Trang "Về tôi" - Giới thiệu chi tiết
- 📋 Trang Resume - Hồ sơ chuyên môn
- 🎨 Trang Portfolio - Trưng bày các dự án
- 📧 Trang Liên hệ

## 🛠️ Công nghệ sử dụng

- **Hugo**: Static site generator
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing

## 📂 Cấu trúc Theme

```
pehtheme-hugo/
├── layouts/              # Hugo layouts
│   ├── _default/        # Default layouts
│   ├── page/            # Page-specific layouts
│   └── partials/        # Partial templates
│       ├── header.html
│       ├── footer.html
│       ├── menu.html
│       └── ...
├── assets/              # CSS & JS
│   ├── css/
│   └── js/
├── static/              # Static files
├── exampleSite/         # Example site
│   ├── content/         # Example content
│   ├── assets/
│   └── static/
└── theme.toml
```

## 🚀 Cách sử dụng Theme này

### 1. Cài đặt Theme

```bash
# Thêm theme vào Hugo project của bạn
cd your-hugo-site
git submodule add https://github.com/TanTai311/blog_network.git themes/pehtheme-hugo
```

### 2. Cấu hình `hugo.toml`

```toml
baseURL = "https://example.com/"
languageCode = "vi"
title = "My Personal Blog"
theme = "pehtheme-hugo"

[params]
  author = "Your Name"
  description = "Your blog description"
```

### 3. Tạo nội dung

```bash
hugo new posts/my-first-post.md
hugo new about.md
hugo new portfolio.md
```

### 4. Chạy development server

```bash
hugo server -D
```

## 📖 Tính năng

- ✨ Responsive design - Hoạt động tốt trên mọi thiết bị
- 🎨 Modern UI - Xây dựng bằng Tailwind CSS
- 📅 Blog Archive - Phân loại bài viết theo năm
- 🔍 Tìm kiếm bài viết - Tìm kiếm nhanh chóng
- 🎯 SEO tối ưu - Thân thiện với công cụ tìm kiếm
- ⚡ Tải nhanh - Site tĩnh cho tốc độ tối ưu
- 📱 Mobile-first - Thiết kế ưu tiên di động

## 📖 Các trang có sẵn

Theme hỗ trợ các trang:

- **Home** (`/`) - Trang chủ với bài viết mới nhất
- **Blog** (`/posts`) - Danh sách toàn bộ bài viết
- **Về tôi** (`/about`) - Giới thiệu chi tiết về bạn
- **Portfolio** (`/portfolio`) - Trưng bày các dự án đã thực hiện
- **Resume** (`/resume`) - Hồ sơ và CV chuyên môn
- **Liên hệ** (`/contact`) - Form liên hệ với bạn

## 📄 License

Dự án này được xây dựng cho mục đích học tập là một phần của đồ án môn **Lập trình mạng máy tính** tại HUTECH.

---

**Cập nhật lần cuối:** Tháng 1 năm 2026

Cảm ơn bạn đã sử dụng theme này! 🙏
