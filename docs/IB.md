# IB.MD — INTERACTION & INTEGRATION BUGS CATALOGUE
> **CreditBird Frontend Reliability & Bug Prevention Handbook**  
> *Phiên bản:* 1.0.0  
> *Mục đích:* Danh mục ghi nhớ các lỗi tương tác, tích hợp, căn chỉnh giao diện (`[IB-01]` đến `[IB-09]`) đã từng gặp và giải pháp chuẩn hóa để ngăn chặn tái phạm.  
> *Áp dụng cho:* Mọi AI Agent và lập trình viên làm việc trên `creditbird-website`.

---

## 1. TỔNG QUAN

Tài liệu này đóng vai trò như **Sổ tay kinh nghiệm thực chiến (Troubleshooting & Anti-Pattern Playbook)**. Trước khi triển khai hoặc chỉnh sửa bất kỳ giao diện nào, Agent **BẮT BUỘC** phải rà soát qua các mã lỗi dưới đây để không lặp lại các sai lầm cũ.

---

## 2. DANH MỤC LỖI TƯƠNG TÁC & CĂN CHỈNH ([IB-01] ĐẾN [IB-09])

### [IB-01] Section Double-Border & Cumulative 1px Grid Drift
* **Mã lỗi:** `[IB-01]`
* **Triệu chứng:**
  * Đường viền giữa 2 section trông dày hơn bình thường (2px thay vì 1px hairline).
  * Chiều cao của section bị dôi ra 1px (ví dụ $545\text{px}$ thay vì $544\text{px}$).
  * Toàn bộ các section bên dưới bị trôi dần 1px (cumulative 1px drift), khiến đường kẻ lưới nền bị lệch pha hoàn toàn so với mép card.
* **Nguyên nhân gốc rễ:**
  * Đặt `border-b border-[#e2e8f0]` hoặc `border-y` lên thẻ cha `<section>` trong khi bên trong `.strict-grid:after` đã tự động vẽ một đường hairline 1px ở `top: 100%`.
* **Giải pháp chuẩn:**
  * Thẻ `<section>` **tuyệt đối không mang bất kỳ border nào**.
  * Để toàn bộ việc phân cách section cho pseudo-element `.strict-grid:after` tự xử lý.
* **Quy chuẩn Code:**
  ```svelte
  <!-- SAI (Tạo viền đôi và gây drift 1px) -->
  <section class="relative theme-light bg-[#f8fafc] text-[#090e1f] border-b border-[#e2e8f0]">
    <div class="strict-grid relative z-2 py-1gu">...</div>
  </section>

  <!-- ĐÚNG (Chuẩn Formance: 0px border trên section, .strict-grid:after vẽ viền 1px) -->
  <section class="relative theme-light bg-[#f8fafc] text-[#090e1f]">
    <div class="strict-grid relative z-2 py-1gu">...</div>
  </section>
  ```

---

### [IB-02] Fractional Height Card (Card có chiều cao số thực cắt ngang mắt lưới)
* **Mã lỗi:** `[IB-02]`
* **Triệu chứng:**
  * Mép đáy của card cắt ngang lưng chừng một hàng ô vuông (ví dụ ở vị trí 21.9px của ô 32px), mắt người nhìn thấy ngay đường viền card bị lơ lửng.
* **Nguyên nhân gốc rễ:**
  * Card để `height: auto`, kích thước phụ thuộc vào lượng văn bản bên trong, dẫn đến chiều cao số thực lẻ (ví dụ `597.9375px`).
* **Giải pháp chuẩn:**
  * Áp dụng class `.snap-card` với CSS Native `calc-size(max-content, round(up, size, var(--grid-unit-base, 32px)))`.
  * Đảm bảo CSS có bind `height: var(--_card-mh, auto)` trên mobile và `@media (min-width: 768px) { height: var(--_card-h, auto); }` trên desktop.
* **Quy chuẩn Code:**
  ```svelte
  <!-- ĐÚNG: Card tự động bo tròn chiều cao lên bội số 32px gần nhất -->
  <div class="snap-card free-flow flex flex-col grid-ring bg-background text-foreground p-1gu sm:p-2gu">
    ...
  </div>
  ```

---

### [IB-03] Background Grid Bleed on Standalone Cards (Lưới nền lộ sọc thừa trên Banner đơn)
* **Mã lỗi:** `[IB-03]`
* **Triệu chứng:**
  * Với các card độc lập (như Banner tài liệu Notion, Banner CTA cuối trang), lưới nền coordinate 32px lộ ra ở 2 bên hông hoặc cắt đứt phía dưới banner, tạo cảm giác lộn xộn, thiếu chuyên nghiệp.
* **Nguyên nhân gốc rễ:**
  * Card không lấp đầy ma trận 50 GU hoặc nội dung không chia thành các cột đều đặn. Lưới nền `conic-gradient` vẽ tràn toàn bộ container làm lộ các đường lưới thừa.
* **Giải pháp chuẩn:**
  * Thêm class `no-bg-grid` vào thẻ `.strict-grid` của section đó.
  * Card bên trong vẫn giữ nguyên khung hairline `.grid-ring` nổi bật trên nền phẳng sạch sẽ.
* **Quy chuẩn Code:**
  ```svelte
  <!-- ĐÚNG: Thêm .no-bg-grid cho banner Notion hoặc CTA -->
  <section class="relative theme-light bg-white text-[#090e1f]">
    <div class="strict-grid relative z-2 py-1gu no-bg-grid">
      <div class="flex flex-col gap-2gu">
        <div class="snap-card free-flow flex flex-col sm:flex-row items-center justify-between grid-ring bg-[#f8fafc] p-1gu sm:p-2gu">
          ...
        </div>
      </div>
    </div>
  </section>
  ```

---

### [IB-04] Arbitrary Tailwind Spacing Drift (Dùng khoảng cách tùy tiện phá vỡ tọa độ)
* **Mã lỗi:** `[IB-04]`
* **Triệu chứng:**
  * Các hàng card tiếp theo bị lệch 8px, 16px hoặc 24px so với mắt lưới coordinate.
* **Nguyên nhân gốc rễ:**
  * Sử dụng các class Tailwind mặc định có giá trị không chia hết cho 32px: `py-12` (48px = 1.5 GU), `py-20` (80px = 2.5 GU), `p-6` (24px = 0.75 GU), `gap-6` (24px).
* **Giải pháp chuẩn:**
  * **Chỉ sử dụng các utility token chuẩn `gu`** đã định nghĩa trong [`src/styles/tokens.css`](file:///home/arch/Project/creditbird-website/src/styles/tokens.css):
    * `.py-1gu` (32px), `.py-2gu` (64px).
    * `.p-1gu` (32px), `.p-2gu` (64px).
    * `.gap-1gu` (32px), `.gap-2gu` (64px).
    * `.mb-1gu` (32px), `.mb-2gu` (64px).

---

### [IB-05] Mobile Horizontal Overflow / Horizontal Scrollbar Leak
* **Mã lỗi:** `[IB-05]`
* **Triệu chứng:**
  * Trên màn hình di động (< 640px), website xuất hiện thanh cuộn ngang khó chịu hoặc layout bị vỡ mép phải.
* **Nguyên nhân gốc rễ:**
  * Các khối terminal code block, command prompt hoặc badge có chuỗi ký tự dài không wrap, không có `overflow-x-auto`.
  * Grid con ép cứng `width` hoặc `min-w` vượt quá chiều rộng màn hình di động.
* **Giải pháp chuẩn:**
  * Các khối Terminal, Code snippet phải luôn có `overflow-x-auto max-w-full`.
  * Khối chứa text dài phải có `break-words` hoặc `truncate`.
  * `.strict-grid` tự động chuyển sang `grid-template-columns: minmax(0, 1fr)` trên viewport dưới `40rem` (640px).

---

### [IB-06] Modal Dialog Background Scroll Leak & Keyboard Escape Trap
* **Mã lỗi:** `[IB-06]`
* **Triệu chứng:**
  * Khi mở `DemoModal`, người dùng cuộn chuột thì trang nền phía sau vẫn cuộn theo.
  * Bấm phím `Escape` không đóng modal, bấm click vào vùng mờ backdrop bên ngoài không đóng modal.
* **Nguyên nhân gốc rễ:**
  * Thiếu khóa `overflow: hidden` trên thẻ `body`.
  * Thiếu `window:keydown` listener bắt phím `Escape`.
* **Giải pháp chuẩn:**
  * Trong component Modal (như [`DemoModal.svelte`](file:///home/arch/Project/creditbird-website/src/lib/components/DemoModal.svelte)):
    ```svelte
    $effect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => {
        document.body.style.overflow = '';
      };
    });
    ```
  * Gắn listener `<svelte:window onkeydown={(e) => e.key === 'Escape' && onclose()} />`.

---

### [IB-07] Lucide Icon Flex Shrinking Distortion
* **Mã lỗi:** `[IB-07]`
* **Triệu chứng:**
  * Các icon Lucide trong button CTA, badge hoặc bullet item bị bẹp dúm hoặc co rúm lại khi chiều rộng màn hình thu hẹp.
* **Nguyên nhân gốc rễ:**
  * Thẻ `<svg>` mặc định có `flex-shrink: 1` trong flexbox container. Khi text bên cạnh dài ra, flexbox sẽ ép nhỏ icon lại.
* **Giải pháp chuẩn:**
  * Luôn luôn gắn class `shrink-0` cho mọi icon Lucide đặt trong flex container:
    ```svelte
    <BookOpen size={14} class="shrink-0" />
    <CheckCircle2 size={18} class="text-[var(--cb-emerald-500)] shrink-0 mt-0.5" />
    ```

---

### [IB-08] External Link Tabnabbing Security Vulnerability
* **Mã lỗi:** `[IB-08]`
* **Triệu chứng:**
  * Lỗi bảo mật khi người dùng click vào link mở tab mới (`target="_blank"`), trang đích có thể truy cập `window.opener` và điều hướng trang gốc sang trang lừa đảo (phishing/tabnabbing).
* **Nguyên nhân gốc rễ:**
  * Đặt `target="_blank"` mà quên thuộc tính `rel="noopener noreferrer"`.
* **Giải pháp chuẩn:**
  * Mọi thẻ `<a>` mở tab mới (như link Notion, GitHub) BẮT BUỘC phải đi kèm:
    ```svelte
    <a href="https://app.notion.com/..." target="_blank" rel="noopener noreferrer">
      ...
    </a>
    ```

---

### [IB-09] Double Border on Adjacent Abutting Cards (Viền đôi giữa 2 card giáp nhau)
* **Mã lỗi:** `[IB-09]`
* **Triệu chứng:**
  * Khi 2 card nằm cạnh nhau không có khoảng hở (gap = 0), đường viền giữa 2 card dày 2px (do $1\text{px} + 1\text{px}$ cộng dồn), phá vỡ phong cách hairline kiến trúc.
* **Nguyên nhân gốc rễ:**
  * Sử dụng border CSS thông thường `border: 1px solid ...`.
* **Giải pháp chuẩn:**
  * Dùng class `.grid-ring` với pseudo-element `::before` mang `box-shadow: inset 0 0 0 1px var(--grid-line-color)` và `inset: 0 -1px -1px 0`. Viền các ô cạnh nhau sẽ chồng khít lên nhau, giữ nguyên độ dày 1px.

---

## 3. BẢNG CHECKLIST RÀ SOÁT LỖI TƯƠNG TÁC TRƯỚC KHI COMMIT

Mọi Agent trước khi hoàn thành công việc phải tự rà soát:
- [ ] `[IB-01]` Không có thẻ `<section>` nào mang class `border-b` hoặc `border-y`.
- [ ] `[IB-02]` Mọi card đều có class `.snap-card` hoặc `.snap-group-item` với chiều cao bội số 32px.
- [ ] `[IB-03]` Các banner đơn lẻ (Notion, CTA) đã được gán class `no-bg-grid`.
- [ ] `[IB-04]` Không còn class Tailwind spacing tùy tiện (`py-12`, `p-6`, v.v.), chỉ dùng `.py-1gu`, `.p-1gu`, v.v.
- [ ] `[IB-05]` Kiểm tra responsive trên màn hình 375px, không có thanh cuộn ngang.
- [ ] `[IB-06]` Modal khóa cuộn body khi mở và đóng được bằng phím Escape.
- [ ] `[IB-07]` Toàn bộ icon Lucide trong button/badge đều có class `shrink-0`.
- [ ] `[IB-08]` Mọi external link `target="_blank"` đều có `rel="noopener noreferrer"`.
- [ ] `[IB-09]` Các khối thẻ giáp nhau đều dùng `.grid-ring` để tránh viền đôi 2px.
