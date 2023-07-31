import jwt_decode from "jwt-decode";
const getExpirationTimeFromToken = (token) => {
    try {
        const decodedToken = jwt_decode(token);
        if (decodedToken.exp) {
            // Trường exp tồn tại trong payload của mã JWT
            // Giá trị của exp là thời gian hết hạn dưới dạng timestamp
            return decodedToken.exp * 1000; // Chuyển đổi thành millisecond (vì Date.now() trả về thời gian hiện tại cũng dưới dạng millisecond)
        } else {
            // Nếu không có trường exp trong payload hoặc giá trị exp không hợp lệ, trả về null
            return null;
        }
    } catch (error) {
        console.error("Lỗi khi giải mã mã JWT:", error);
        return null;
    }
};
export default getExpirationTimeFromToken()