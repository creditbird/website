# CP.MD — COMMON PATTERNS & ARCHITECTURAL BLUEPRINT GUIDE
> **CreditBird Design System & Formance Parity Architecture**  
> *Phiên bản:* 1.1.0  
> *Mục đích:* Danh mục các Common Pattern chuẩn hóa (`[CP-01]` đến `[CP-07]`) áp dụng cho toàn bộ giao diện CreditBird Website.  
> *Tiêu chuẩn tham chiếu:* [Formance](https://www.formance.com/) & Cyanotype Blueprint Aesthetic ([`DESIGN.md`](file:///home/arch/Project/creditbird-website/DESIGN.md))

---

## 1. TỔNG QUAN & NGUYÊN LÝ TOÁN HỌC CỐT LÕI

Hệ thống giao diện CreditBird tuân thủ triệt để phong cách **Cyanotype Blueprint Aesthetic** (Bản vẽ kiến trúc kỹ thuật công trình / Millimeter blueprint coordinate grid) học tập trực tiếp từ kiến trúc của **Formance.com**.

### 1.1 Hằng số Tọa độ Cơ bản (Grid Constant)
* **Đơn vị ô lưới cơ sở:** `--grid-unit: 32px` (hoặc `--grid-unit-base: 32px`).
* **Shell container tối đa:** `--grid-shell-width: min(100cqi, calc(var(--grid-unit) * 50))` (1600px = 50 Grid Units).
* **Nội dung hiển thị khả dụng (Content Width):** `1536px` (= 48 Grid Units).
* **Lề hai bên (Side Padding):** `32px` (= 1 Grid Unit mỗi bên).
* **Quy luật bất biến:**
  $$\forall \text{ border } Y \in \text{viewport}: \quad Y_{\text{border}} \equiv 0 \pmod{32\text{px}}$$
  $$\forall \text{ card } H \in \text{section}: \quad H_{\text{card}} \equiv 0 \pmod{32\text{px}}$$

---

## 2. DANH MỤC COMMON PATTERNS CHUẨN ([CP-01] ĐẾN [CP-07])

### [CP-01] Auto-Snap Card Height bằng CSS Native `calc-size()` & `round()`
* **Mục đích:** Tự động bo tròn chiều cao của card lên bội số gần nhất của 32px, triệt tiêu hoàn toàn hiện tượng đường viền đáy card cắt ngang lưng chừng một ô lưới.
* **Quy cách CSS (`src/styles/tokens.css`):**
  ```css
  .snap-card {
    --_card-h: auto;
    --_card-mh: auto;
    height: var(--_card-mh, auto);
  }

  @media (min-width: 768px) {
    .snap-card {
      height: var(--_card-h, auto);
    }
  }

  @supports (height: calc-size(max-content, size)) {
    .snap-card {
      --_card-h: calc-size(max-content, round(up, size, var(--grid-unit-base, var(--grid-unit, 32px))));
      --_card-mh: calc-size(max-content, round(up, size, var(--grid-unit-base, var(--grid-unit, 32px))));
    }
    .snap-group-item {
      min-height: calc-size(max-content, round(up, size, var(--grid-unit-base, var(--grid-unit, 32px))));
    }
  }
  ```
* **Cơ chế hoạt động:** Khi nội dung tự nhiên chiếm `597.9px`, trình duyệt tự động áp dụng `round(up, 597.9px, 32px)` $\rightarrow$ `608px` ($19 \times 32\text{px}$). Chiều cao luôn là số nguyên lần 32px.

---

### [CP-02] Hệ Thống Đơn Vị Đo Lường Nghiêm Ngặt (`1gu`, `2gu`)
* **Mục đích:** Đảm bảo toàn bộ padding, margin, gap đều là bội số nguyên của 32px.
* **Bảng tra cứu Token Spacing chuẩn:**
  | Class | Giá trị thực | Quy cách sử dụng |
  | :--- | :--- | :--- |
  | `.p-1gu` | `32px` | Padding trong card đơn |
  | `.p-2gu` | `64px` | Padding trong card lớn / split showcase |
  | `.py-1gu` | `top: 32px, bottom: 32px` | Padding dọc section nhỏ (Metrics, Docs) |
  | `.py-2gu` | `top: 64px, bottom: 64px` | Padding dọc section lớn (Hero, Modules) |
  | `.gap-1gu` | `32px` | Khoảng cách giữa các card cạnh nhau |
  | `.gap-2gu` | `64px` | Khoảng cách giữa header card và content grid |
  | `.h-1gu` | `32px` | Chiều cao chuẩn của `snap-badge` (Eyebrow) |
  | `.h-[calc(var(--grid-unit)*3)]` | `96px` | Chiều cao title card hoặc telemetry header |
  | `.h-[calc(var(--grid-unit)*7)]` | `224px` | Chiều cao chuẩn của metric card (`BlueprintMetricsBar`) |

> [!CAUTION]
> **BẢNG BỊ CẤM (ANTI-PATTERNS):**
> * TUYỆT ĐỐI KHÔNG DÙNG: `py-12` (48px = 1.5 GU), `py-20` (80px = 2.5 GU), `p-6` (24px = 0.75 GU), `gap-6` (24px).
> * Vi phạm các giá trị lẻ này sẽ làm toàn bộ hàng bên dưới bị lệch 8px hoặc 16px so với mắt lưới.

---

### [CP-03] Phân Cách Section bằng `.strict-grid:after` (Cấm `border-b` / `border-y` trên `<section>`)
* **Mục đích:** Loại bỏ hiện tượng lệch lũy tiến 1px (cumulative 1px drift) giữa các section.
* **Quy chuẩn Code:**
  ```svelte
  <!-- ĐÚNG (Chuẩn Formance): Section không mang border, viền vẽ bởi .strict-grid:after -->
  <section class="relative theme-light bg-[#f8fafc] text-[#090e1f]">
    <div class="strict-grid relative z-2 py-1gu">
      ...
    </div>
  </section>

  <!-- SAI (Lỗi lệch lưới): Thẻ section có border-b hoặc border-y -->
  <section class="relative theme-light bg-[#f8fafc] text-[#090e1f] border-b border-[#e2e8f0]">
    ...
  </section>
  ```
* **Cơ chế CSS:** `.strict-grid:after` được định vị tại `top: 100%; height: 1px; left: 0; right: 0; background: var(--_grid-line);`. Khi `.strict-grid` cao chẵn bội số 32px, đường hairline `::after` nằm trùng khớp 100% với đường kẻ ngang của lưới.

---

### [CP-04] Khung Kiến Trúc Hairline `.grid-ring` (Zero Double-Borders)
* **Mục đích:** Đảm bảo khi các card nằm cạnh nhau hoặc nằm trên lưới coordinate, đường viền không bị viền đôi 2px.
* **Quy chuẩn CSS:**
  ```css
  .grid-ring {
    isolation: isolate;
    position: relative;
  }

  .grid-ring:before {
    content: "";
    z-index: -1;
    background: inherit;
    box-shadow: inset 0 0 0 1px var(--grid-line-color);
    position: absolute;
    inset: 0 -1px -1px 0;
    pointer-events: none;
  }
  ```
* Nhờ `inset: 0 -1px -1px 0`, cạnh phải và cạnh đáy của card đè khít lên vạch lưới 1px, tạo độ sắc nét tuyệt đối.

---

### [CP-05] Chiến Thuật `.no-bg-grid` Cho Banner Độc Lập & Khối Chuyển Đổi
* **Mục đích:** Tránh lộ khoảng hở hoặc cắt ngang mắt lưới khi hiển thị card đơn lẻ, CTA hoặc bảng động.
* **Khi nào áp dụng:**
  1. **Banner độc lập:** Khối hướng dẫn Notion Docs, tài liệu GitHub.
  2. **Khối chuyển đổi cuối trang:** CTA section (`BlueprintCtaSection`).
  3. **Bảng nội dung động phức tạp:** Bảng pill badge không thể cố định chiều cao bội số 32px.
* **Quy chuẩn Code:**
  ```svelte
  <div class="strict-grid relative z-2 py-1gu no-bg-grid">
    <div class="flex flex-col gap-2gu">
      <div class="snap-card free-flow flex flex-col sm:flex-row items-center justify-between grid-ring bg-[#f8fafc] p-1gu sm:p-2gu">
        ...
      </div>
    </div>
  </div>
  ```
* **Tác dụng:** Tắt lưới nền conic-gradient và ẩn `::after` của section đó. Card vẫn giữ khung `.grid-ring` nổi bật trên nền phẳng sạch sẽ.

---

### [CP-06] Container Shell 1600px & Content 1536px (Strict Grid Math)
* **Mục đích:** Cố định bề rộng container và căn giữa đối xứng theo bước nhảy 64px (2 Grid Units).
* **Quy chuẩn CSS:**
  ```css
  .strict-grid {
    --_pad-base: var(--grid-unit);
    --grid-shell-width: min(100cqi, calc(var(--grid-unit) * 50));
    --grid-content-width: round(down, calc(var(--grid-shell-width) - var(--_pad-base) * 2), calc(var(--grid-unit) * 2));
    --grid-side-pad: round(down, calc((var(--grid-shell-width) - var(--grid-content-width)) / 2), 1px);
    
    max-width: calc(var(--grid-unit) * 50); /* 1600px */
    margin-inline: round(down, calc((100cqi - var(--grid-shell-width)) / 2), 1px);
    padding-inline: var(--grid-side-pad); /* 32px */
  }
  ```
* **Phân bổ:** 1 GU lề trái (32px) + 48 GU nội dung (1536px) + 1 GU lề phải (32px) = 50 GU (1600px).

---

### [CP-07] 5 Bộ Component Mẫu Đã Đạt Chuẩn Formance Parity
Tất cả các trang con BẮT BUỘC ưu tiên sử dụng 5 component mẫu tại `src/lib/components/`:

1. [`BlueprintSubpageHero.svelte`](file:///home/arch/Project/creditbird-website/src/lib/components/BlueprintSubpageHero.svelte): Hero cockpit với terminal emulator, tự động snap $17 \times 32\text{px} = 544\text{px}$.
2. [`BlueprintMetricsBar.svelte`](file:///home/arch/Project/creditbird-website/src/lib/components/BlueprintMetricsBar.svelte): Thanh telemetry 4 chỉ số, snap $16 \times 32\text{px} = 512\text{px}$, các card con cao chính xác $7 \times 32\text{px} = 224\text{px}$.
3. [`BlueprintGridSection.svelte`](file:///home/arch/Project/creditbird-website/src/lib/components/BlueprintGridSection.svelte): Ma trận phân hệ 2/3/4 cột với `grid-row-exact`, snap $50 \times 32\text{px} = 1600\text{px}$.
4. [`BlueprintSplitShowcase.svelte`](file:///home/arch/Project/creditbird-website/src/lib/components/BlueprintSplitShowcase.svelte): Bố cục chia đôi (Tính năng bên trái + Cockpit terminal bên phải), snap $21 \times 32\text{px} = 672\text{px}$, card cao $19 \times 32\text{px} = 608\text{px}$.
5. [`BlueprintCtaSection.svelte`](file:///home/arch/Project/creditbird-website/src/lib/components/BlueprintCtaSection.svelte): Khối chuyển đổi hành động sử dụng `.no-bg-grid`, snap $13 \times 32\text{px} = 416\text{px}$, card cao $11 \times 32\text{px} = 352\text{px}$.

---

## 3. CHECKLIST KIỂM THỬ TRƯỚC KHI BÁO CÁO (AGENT QUALITY GATE)

Mỗi khi chỉnh sửa hoặc tạo một section mới, Agent BẮT BUỘC phải thực hiện script kiểm tra tự động sau trên DevTools Console:

```javascript
// Chạy trong Chrome DevTools để kiểm tra 100% Snap Rate
const grids = document.querySelectorAll('.strict-grid');
grids.forEach((grid, i) => {
  const gRect = grid.getBoundingClientRect();
  const isGridSnapped = gRect.height % 32 === 0;
  console.log(`Grid #${i}: height = ${gRect.height}px | Snapped: ${isGridSnapped}`);
  
  const cards = grid.querySelectorAll('.snap-card, .snap-group-item');
  cards.forEach((c, ci) => {
    const cRect = c.getBoundingClientRect();
    const isHeightSnapped = cRect.height % 32 === 0;
    const isBottomSnapped = (cRect.bottom - gRect.top) % 32 === 0;
    if (!isHeightSnapped || !isBottomSnapped) {
      console.error(`  -> Card #${ci} MISALIGNED! height: ${cRect.height}, bottomOffset: ${cRect.bottom - gRect.top}`);
    }
  });
});
```

* **Tiêu chuẩn nghiệm thu:** Tất cả kết quả kiểm tra `isGridSnapped`, `isHeightSnapped`, `isBottomSnapped` đều phải trả về `true` (sai số $0.00\text{px}$).
