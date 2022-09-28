- Cách đặt tên biến sao cho đúng:
    + Hằng số thì viết in hoa
    + Dùng để lấy giá trị true false thì đặt tên kiểu: is..., has... (Ex: isActive)
    + Đặt tên hàm phải dùng động từ
    + số nhiều phải thêm đuôi 'List'
- Static type checking 
    + Cơ chế soát lỗi của typeScript
- Explicit types vs Infered types
    + Explicit types: khai báo dữ liệu kiểu tường minh
    + Infered types: cơ chế tự nhận biết kiểu dữ liệu của typeScript
    + Eraised types: khi compile từ ts sang js, tất cả annontation sẽ bị xóa
- Strictness
    + Strict flag: ? bắt lỗi : không bắt lỗi
    + Option:
        . nolmplicitAny: ? báo lỗi khi một biến không được khai báo kiểu dữ liệu và biến đó mang kiểu dữ liệu any : bỏ qua
        . strictNullChecks: ? báo lỗi khi null/undefined được sử dụng không đúng : bỏ qua
        . alwaysStrict: ? parse tất cả file ts ở strict mode ('use strict') 
- Primitive type ts
    + Ex: 2 == '2' or 2 === '2' return false
    + So sánh Object: Không thể so sánh 1 biến chứa object với 1 object được
    + null == undefine // true, null == 0 // false, null >= 0 // true; vì khi null được so sánh >= 0 thì Number(null) để so sánh
- falsy 
    |       0       |       -0      |       false       |
    |      0n       |   "", '', ``  |       null        |
    |   undefined   |      NaN      |   document.all    |
- truthy != falsy 
- Literal types: chỉ định một giá trị cụ thể làm kiểu dữ liệu 
    + Dùng vs const: giá trị đc gán mặc định nên có kiểu dữ liệu chính bằng giá trị đc gán (const num = 1 // num: 1)
    + Dùng vs let: (let num = 1 // num: number)
- {} as const (chuyển các key: value trong obj thành readonly)
- Type alias đặt tên mới cho kiểu dữ liệu
- Interface : 1 tập hợp có các key, có thể được dùng để định nghĩa cho một mảng, hay một function  
    + Object type: 
        . Khi có dấu ? sau key thì key đó có thể có hoặc không có cũng không xuất hiện lỗi
    + Union type:
        . 1 biến có thể có nhiều hơn 1 kiểu dữ liệu ngăn cách bằng dấu |
    + Intersection type:
        . Trong các interface, các key giống nhau cần phải có kiểu dữ liệu nhất quán
    + Không dùng prefix I
- Nên dùng interface khi có thể thay vì type
- Default function return type:
    + Khi không return thì ts tự hiểu hàm trả về kiểu dữ liệu void có thể hiệu là hàm ko có giá trị trả về

- Enum:
    + Number enum: Khi khai báo key mà ko set value thì value có giá trị giống như chỉ mục trong mảng
    + String enum: Khai báo giống với number enum, có thể lấy ra value thông qua key
- Generics
    + Có thể dùng Array<dataType> để định nghĩa cho mảng


