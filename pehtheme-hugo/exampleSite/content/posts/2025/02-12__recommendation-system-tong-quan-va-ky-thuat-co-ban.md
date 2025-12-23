---
title: "Recommendation system: tổng quan và kỹ thuật cơ bản"
date: 2025-02-12T09:30:00+07:00
slug: "recommendation-system-tong-quan-va-ky-thuat-co-ban"
description: "Tổng quan hệ gợi ý: dữ liệu, các hướng tiếp cận, cold-start, đánh giá và triển khai."
image: 'images/Recommendation system tổng quan và kỹ thuật cơ bản.png'
categories:
  - recommendation
tags:
  - recommendation
  - machine-learning
  - collaborative-filtering
  - content-based
  - ranking
  - retrieval
draft: false
---

## 1. Recommendation system giải quyết gì?
Hệ gợi ý (recommender) giúp cá nhân hóa nội dung/sản phẩm cho từng người dùng, tối ưu các mục tiêu như CTR, chuyển đổi và giữ chân.

## 2. Dữ liệu đầu vào
- **Explicit feedback**: rating, like/dislike.
- **Implicit feedback**: click, view, dwell time, add-to-cart.
- **Context**: thời gian, thiết bị, vị trí, phiên truy cập.
Implicit phổ biến hơn nhưng nhiễu, cần xử lý bias (ví dụ: vị trí hiển thị).

## 3. Baseline phổ biến
- Gợi ý theo độ phổ biến hoặc xu hướng gần đây.
- Đơn giản, dễ triển khai và dùng làm baseline so sánh.

## 4. Content-based
- Dựa trên mô tả item (tag, mô tả, từ khóa).
- Ưu điểm: xử lý cold-start cho item mới.
- Nhược điểm: dễ “over-specialize”, ít khám phá mới.

## 5. Collaborative filtering
- Dựa trên hành vi người dùng tương tự.
- User-based hoặc item-based similarity.
- Mạnh khi dữ liệu dày, yếu khi cold-start.

## 6. Matrix factorization
- Phân rã ma trận user-item thành latent factors.
- Kỹ thuật phổ biến: ALS, SVD.
- Hợp implicit feedback khi dùng weighting.

## 7. Hai tầng: retrieval và ranking
- **Retrieval**: lấy ra tập ứng viên (candidate) nhanh.
- **Ranking**: sắp xếp ứng viên theo điểm phù hợp.
Thường dùng negative sampling để huấn luyện tốt hơn.

## 8. Cold-start và khám phá
- Cold-start user: onboarding, khảo sát sở thích, popular item.
- Cold-start item: metadata + content-based.
- Exploration: bandit hoặc epsilon-greedy để tránh “kẹt” filter bubble.

## 9. Đánh giá
- Offline: Precision@K, Recall@K, MAP, NDCG.
- Online: CTR, conversion, dwell time, retention.
- A/B test giúp kiểm chứng hiệu quả thực tế.

## 10. Rủi ro và vận hành
- Feedback loop, thiên lệch dữ liệu.
- Cân bằng giữa relevance và diversity/novelty.
- Theo dõi drift và cập nhật định kỳ.

## 11. Checklist nhanh
- Có baseline rõ ràng.
- Theo dõi metric online và offline.
- Có chiến lược cold-start.
- Kiểm soát bias và diversity.

