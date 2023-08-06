# Bigmo.studio

Main -> uttil : 정산
| BIGMO | WORKS | CONTACT | NEWS |
| :------: | :----: | :---------: | :------: |
| 소개 | 웹툰 | 주소/연락처 | 공지사항 |
| 연혁 | 웹소설 | 문의 | 뉴스 |
| 프로덕션 | 캐릭터 | | 갤러리 |
| 파트너사 | | | |

## Use jQuery 3.x from CDN

```html
<script
  src="https://code.jquery.com/jquery-3.7.0.slim.min.js"
  integrity="sha256-tG5mcZUtJsZvyKAxYLVXrmjKBVLd6VpVccqz/r4ypFE="
  crossorigin="anonymous"
></script>
```

## Use Swiper from CDN

swiper loop를 자연스럽게 하려면 8버전으로 해야함

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
```

## Web Font from CDN

```html
<link
  rel="stylesheet"
  as="style"
  crossorigin
  href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css"
/>
```

## Responsive Breakpoints

```css
@media (min-width: 1024px) and (max-width: 1200px) {
  /* 데스크탑 및 큰 화면에 적용될 스타일 */
  /* 데스크탑 header nav등에 사용 */
}
@media (min-width: 768px) and (max-width: 1023px) {
  /* 태블릿 및 중간 화면에 적용될 스타일 */
  /* 일부 예외적인 부분만 반영, 대체로 pc와 모바일만 구성하도록 할 것 */
}
@media (max-width: 767px) {
  /* 스마트폰 및 작은 화면에 적용될 스타일 */
}
```
