# AGENTS.MD — QUY TẮC BẮT BUỘC DÀNH CHO AI AGENT (CREDITBIRD-WEBSITE)

> **QUY TẮC TỐI CAO:**
> 1. Mọi AI Agent khi bắt đầu làm việc trong repository này **BẮT BUỘC** phải gọi tool `memory_smart_search` hoặc `memory_recall` (của MCP `agentmemory`) để đọc và tải lại ngữ cảnh/ký ức trước khi thực hiện bất kỳ công việc hay đề xuất giải pháp nào.
> 2. Mọi hoạt động khảo sát mã nguồn, tìm kiếm symbol, truy vết luồng gọi hàm hay phân tích tác động code **BẮT BUỘC ƯU TIÊN** sử dụng **CodeGraph** (`codegraph_explore` MCP hoặc CLI `codegraph`) thay vì grep/find/read file thủ công.
> 3. **BẮT BUỘC LUÔN DÙNG `bun` VÀ `bunx`** thay thế hoàn toàn cho `node`, `npm`, `npx`, `pnpm` trong mọi tác vụ (chạy script, cài package, khởi tạo, build, dev server).
> 4. **THƯ MỤC CHÍNH CỦA DỰ ÁN** chính là `/home/arch/Project/creditbird-website`, mọi source code SvelteKit được tổ chức trực tiếp tại đây (`src/`, `static/`, `package.json`, `vite.config.ts`), không tạo thư mục con làm project lồng nhau.

---

## 1. QUY TRÌNH 4 BƯỚC BẮT BUỘC KHI NHẬN TASK

Khi nhận bất kỳ yêu cầu nào từ người dùng, Agent phải tuân thủ đúng 4 bước sau:

### Bước 1: Tra cứu Ký ức (Memory Recall)
- Gọi MCP tool `agentmemory`: `memory_smart_search` hoặc `memory_recall` với từ khóa liên quan đến task (ví dụ: `creditbird`, `website`, `rustsale`, `hyperframes`, `tokens`, `components`, v.v.).
- Kiểm tra lại các quyết định kiến trúc cũ, sở thích người dùng, quy chuẩn đã thống nhất hoặc lỗi từng gặp để không lặp lại sai lầm.

### Bước 2: Khảo sát Code & Kiến trúc với CodeGraph
- Dự án đã được lập chỉ mục tại `.codegraph/`.
- Sử dụng `codegraph_explore` (MCP) hoặc `codegraph explore` (CLI) để lấy toàn bộ mã nguồn liên quan kèm đồ thị luồng gọi (call graph) trong một lần truy vấn duy nhất.
- Khi cần xem tác động khi sửa một hàm/component: dùng `codegraph impact <symbol>`.
- Chỉ sử dụng `grep` hoặc đọc file thủ công khi CodeGraph không hỗ trợ định dạng file đó (ví dụ file media, văn bản thô thuần túy không chứa cú pháp code).

### Bước 3: Thực thi Công việc (Implementation & Verification)
- Triển khai code theo đúng yêu cầu, giữ vững chất lượng và các tiêu chuẩn UI/UX, responsive, performance.
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

## 4. CHECKLIST DÀNH CHO AGENT TRƯỚC KHI BÁO CÁO HOÀN THÀNH

- [ ] Đã tra cứu `agentmemory` trước khi bắt đầu chưa?
- [ ] Đã dùng CodeGraph để khảo sát thay vì grep mò mẫm chưa?
- [ ] Đã chạy `codegraph sync` nếu có thay đổi cấu trúc mã nguồn chưa?
- [ ] Đã lưu lại quyết định hoặc kinh nghiệm quan trọng vào `agentmemory` chưa?
- [ ] Mọi đường dẫn file trong phản hồi đã ở định dạng clickable markdown `[filename](file:///path/to/file)` chưa?
