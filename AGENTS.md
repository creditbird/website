# AGENTS.MD — QUY TẮC BẮT BUỘC DÀNH CHO AI AGENT (CREDITBIRD-WEBSITE)

> **QUY TẮC TỐI CAO:**
> 1. Mọi AI Agent khi bắt đầu làm việc trong repository này **BẮT BUỘC** phải gọi tool `memory_smart_search` hoặc `memory_recall` (của MCP `agentmemory`) để đọc và tải lại ngữ cảnh/ký ức trước khi thực hiện bất kỳ công việc hay đề xuất giải pháp nào.
> 2. Mọi hoạt động khảo sát mã nguồn, tìm kiếm symbol, truy vết luồng gọi hàm hay phân tích tác động code **BẮT BUỘC ƯU TIÊN** sử dụng **CodeGraph** (`codegraph_explore` MCP hoặc CLI `codegraph`) thay vì grep/find/read file thủ công.
> 3. **BẮT BUỘC LUÔN DÙNG `bun` VÀ `bunx`** thay thế hoàn toàn cho `node`, `npm`, `npx`, `pnpm` trong mọi tác vụ (chạy script, cài package, khởi tạo, build, dev server).
> 4. **THƯ MỤC CHÍNH CỦA DỰ ÁN** chính là `/home/arch/Project/creditbird-website`, mọi source code SvelteKit được tổ chức trực tiếp tại đây (`src/`, `static/`, `package.json`, `vite.config.ts`), không tạo thư mục con làm project lồng nhau.
> 5. **BẮT BUỘC ĐỌC 2 TÀI LIỆU CẨM NANG TRƯỚC KHI IMPLEMENT TASK MỚI**: [`docs/CP.md`](file:///home/arch/Project/creditbird-website/docs/CP.md) (Common Patterns `[CP-01]` đến `[CP-07]`) và [`docs/IB.md`](file:///home/arch/Project/creditbird-website/docs/IB.md) (Interaction Bugs `[IB-01]` đến `[IB-09]`) để ngăn chặn tuyệt đối việc lặp lại bug cũ hoặc triển khai sai quy chuẩn kiến trúc.
> 6. **BẮT BUỘC LUÔN SỬ DỤNG SVELTE MCP KHI LÀM VIỆC VỚI SVELTE/SVELTEKIT**: Khi cần tra cứu tài liệu Svelte 5 / SvelteKit và trước khi gửi mã nguồn Svelte cho người dùng, BẮT BUỘC phải dùng MCP `svelte` (`get-documentation`, `list-sections`, `svelte-autofixer`) để đảm bảo code chuẩn Runes mode và không có lỗi tiềm ẩn.
> 7. **TÊN MIỀN CHÍNH THỨC CỦA DỰ ÁN**: Website sử dụng duy nhất tên miền chính thức là `https://creditbirdtech.com` cho toàn bộ sitemap, canonical URL, OpenGraph, hreflang alternates và tài liệu kỹ thuật.

---

## 1. QUY TRÌNH 4 BƯỚC BẮT BUỘC KHI NHẬN TASK

Khi nhận bất kỳ yêu cầu nào từ người dùng, Agent phải tuân thủ đúng 4 bước sau:

### Bước 1: Tra cứu Ký ức & Đọc Sổ tay CP / IB (Memory & Standards Check)
- Gọi MCP tool `agentmemory`: `memory_smart_search` hoặc `memory_recall` với từ khóa liên quan đến task.
- **Đọc và rà soát 2 tài liệu tiêu chuẩn bắt buộc**:
  - [`docs/CP.md`](file:///home/arch/Project/creditbird-website/docs/CP.md): Nắm vững các pattern `[CP-01]` đến `[CP-07]` (snap height 32px, 0px section border, `.grid-ring`, `.no-bg-grid`, v.v.).
  - [`docs/IB.md`](file:///home/arch/Project/creditbird-website/docs/IB.md): Rà soát danh mục 9 lỗi thường gặp `[IB-01]` đến `[IB-09]` để chủ động phòng ngừa khi viết code.

### Bước 2: Khảo sát Code & Kiến trúc với CodeGraph
- Dự án đã được lập chỉ mục tại `.codegraph/`.
- Sử dụng `codegraph_explore` (MCP) hoặc `codegraph explore` (CLI) để lấy toàn bộ mã nguồn liên quan kèm đồ thị luồng gọi (call graph) trong một lần truy vấn duy nhất.
- Khi cần xem tác động khi sửa một hàm/component: dùng `codegraph impact <symbol>`.
- Chỉ sử dụng `grep` hoặc đọc file thủ công khi CodeGraph không hỗ trợ định dạng file đó (ví dụ file media, văn bản thô thuần túy không chứa cú pháp code).

### Bước 3: Thực thi Công việc (Implementation & Svelte MCP Gate)
- Triển khai code theo đúng yêu cầu, giữ vững chất lượng và các tiêu chuẩn UI/UX, responsive, performance.
- **Quy tắc Svelte MCP bắt buộc**:
  - Khi cần tài liệu về Svelte 5 / SvelteKit (Runes `$state`, `$derived`, `$effect`, `$props`, routing, hooks): gọi MCP `svelte` tool `get-documentation` hoặc `list-sections`.
  - Sau khi viết hoặc sửa file `.svelte` / `.svelte.ts`: chạy tool `svelte-autofixer` để tự động kiểm tra và sửa lỗi trước khi hoàn tất.
- Nếu có file mã nguồn mới được thêm vào hoặc chỉnh sửa lớn, chạy lệnh:
  ```bash
  codegraph sync
  ```
  để cập nhật chỉ mục đồ thị mã nguồn cho dự án.

### Bước 4: Lưu Ký ức & Bài học Mới (Memory Save)
- Khi có quyết định kỹ thuật quan trọng, cấu trúc mới, hoặc fix được một bug khó:
  - Gọi `memory_save` (với type phù hợp: `architecture`, `pattern`, `preference`, `bug`, `workflow`).
  - Gọi `memory_lesson_save` nếu đúc kết được kinh nghiệm thực chiến hữu ích cho các phiên làm việc tiếp theo.

---

## 2. HƯỚNG DẪN SỬ DỤNG AGENTMEMORY

Hệ thống bộ nhớ dài hạn `agentmemory` chạy ngầm tại cổng `http://localhost:3111` và được tích hợp qua giao thức MCP.

### Các MCP Tools khả dụng:
- **`memory_smart_search(query)`**: Tìm kiếm thông minh dựa trên ngữ nghĩa và từ khóa kết hợp.
- **`memory_recall(query, limit, format)`**: Truy xuất chi tiết các quan sát, quyết định trong quá khứ liên quan đến task.
- **`memory_save(content, type, concepts, files)`**: Lưu ký ức dài hạn.
  - `type`: `pattern` | `preference` | `architecture` | `bug` | `workflow` | `fact`
  - `concepts`: Danh sách từ khóa ngăn cách bởi dấu phẩy.
  - `files`: Danh sách đường dẫn file liên quan.
- **`memory_lesson_save(lesson, context)`**: Lưu bài học kinh nghiệm cụ thể.
- **`memory_reflect(topic)`**: Tổng hợp và suy ngẫm về các ký ức liên quan đến một chủ đề.

### CLI hữu ích:
```bash
agentmemory status       # Kiểm tra trạng thái kết nối và số lượng ký ức
agentmemory doctor       # Chẩn đoán sức khỏe hệ thống memory
```

---

## 3. HƯỚNG DẪN SỬ DỤNG CODEGRAPH

Thư mục chỉ mục: `.codegraph/` tại gốc dự án.

### MCP Tool:
- **`codegraph_explore(query, projectPath)`**:
  - `query`: Tên hàm, class, component hoặc câu hỏi bằng ngôn ngữ tự nhiên.
  - `projectPath`: Đường dẫn thư mục dự án (khuyên dùng khi làm việc trong môi trường đa dự án: `/home/arch/Project/creditbird-website`).

### CLI Commands:
```bash
# Khám phá symbol và luồng gọi (tương đương codegraph_explore MCP)
codegraph explore "<symbol hoặc câu hỏi>"

# Tìm nhanh vị trí định nghĩa symbol
codegraph query "<symbol>"

# Tìm danh sách nơi gọi đến symbol này
codegraph callers "<symbol>"

# Tìm danh sách các hàm/symbol mà symbol này gọi tới
codegraph callees "<symbol>"

# Phân tích mức độ ảnh hưởng (blast radius) trước khi refactor
codegraph impact "<symbol>"

# Đồng bộ lại index sau khi thay đổi hoặc thêm file code mới
codegraph sync

# Kiểm tra trạng thái index
codegraph status
```

---

## 4. HƯỚNG DẪN BẮT BUỘC SỬ DỤNG SVELTE MCP (TÀI LIỆU & AUTO-FIXER)

MCP Server: `svelte` (Lazy load qua `call_mcp_tool`).

### Các MCP Tools khả dụng:
- **`list-sections`**: Liệt kê toàn bộ các mục tài liệu chính thức của Svelte 5 và SvelteKit (Runes, routing, server hooks, load functions, form actions, transition, v.v.).
- **`get-documentation({ section })`**: Lấy tài liệu đầy đủ kèm ví dụ mẫu của một hoặc nhiều section (ví dụ: `section: "$state"` hoặc `section: ["routing", "hooks"]`). Luôn gọi trước khi suy đoán API SvelteKit hoặc Runes syntax.
- **`svelte-autofixer({ code, desired_svelte_version: 5, filename })`**: Rà soát tĩnh mã nguồn Svelte component hoặc module, trả về danh sách cảnh báo, deprecated syntax và code đã sửa tối ưu cho Svelte 5.
  - `code`: Nội dung mã nguồn component hoặc đường dẫn file.
  - `desired_svelte_version`: Luôn đặt là `5`.
  - `filename`: Tên file component dạng `ComponentName.svelte`.
- **`playground-link`**: Tạo liên kết thử nghiệm tương tác trên Svelte REPL.

---

## 5. TÀI LIỆU QUY CHUẨN COMMON PATTERNS (DOCS/CP.MD) & SỔ TAY LỖI TƯƠNG TÁC (DOCS/IB.MD)

Mọi thay đổi giao diện, tạo component mới, hoặc căn chỉnh layout BẮT BUỘC phải đọc và tuân thủ hướng dẫn tại:
- [`docs/CP.md`](file:///home/arch/Project/creditbird-website/docs/CP.md): Hướng dẫn chi tiết Formance Parity & Cyanotype Blueprint Aesthetic, danh mục 7 pattern `[CP-01]` đến `[CP-07]` (snap border 32px pixel-perfect, 0px border trên `<section>`, `.grid-ring`, `.no-bg-grid`, v.v.).
- [`docs/IB.md`](file:///home/arch/Project/creditbird-website/docs/IB.md): Sổ tay 9 lỗi tương tác & tích hợp thường gặp `[IB-01]` đến `[IB-09]` (cumulative 1px drift, fractional card height, background grid bleed, responsive overflow, modal scroll trap, v.v.).

---

## 6. CHECKLIST DÀNH CHO AGENT TRƯỚC KHI BÁO CÁO HOÀN THÀNH

- [ ] Đã tra cứu `agentmemory` trước khi bắt đầu chưa?
- [ ] Đã đọc và tuân thủ các pattern trong [`docs/CP.md`](file:///home/arch/Project/creditbird-website/docs/CP.md) (`[CP-01]` - `[CP-07]`) chưa?
- [ ] Đã rà soát và đối chiếu danh mục lỗi trong [`docs/IB.md`](file:///home/arch/Project/creditbird-website/docs/IB.md) (`[IB-01]` - `[IB-09]`) chưa?
- [ ] Đã dùng Svelte MCP để tra cứu tài liệu và chạy `svelte-autofixer` khi làm việc với Svelte chưa?
- [ ] Đã đảm bảo domain chuẩn `https://creditbirdtech.com` cho canonical, sitemap, OpenGraph chưa?
- [ ] Đã dùng CodeGraph để khảo sát thay vì grep mò mẫm chưa?
- [ ] Đã chạy `codegraph sync` nếu có thay đổi cấu trúc mã nguồn chưa?
- [ ] Đã lưu lại quyết định hoặc kinh nghiệm quan trọng vào `agentmemory` chưa?
- [ ] Mọi đường dẫn file trong phản hồi đã ở định dạng clickable markdown `[filename](file:///path/to/file)` chưa?
