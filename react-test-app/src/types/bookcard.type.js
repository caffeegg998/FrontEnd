
import PropTypes from "prop-types";

export const Book = {
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        lang: PropTypes.string.isRequired,
        publisher: PropTypes.string.isRequired,
        publicationYear: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        format: PropTypes.string.isRequired,
        series: PropTypes.string.isRequired,
        bookUrl: PropTypes.string.isRequired,
        coverUrl: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
    };
export const initialBookList =[
    {
        "id": 5,
        "category": [
            {
                "id": 4,
                "name": "Kim Dung"
            },
            {
                "id": 5,
                "name": "Kiếm Hiệp"
            }
        ],
        "title": "Thiên Long Bát Bộ",
        "author": "Kim Dung",
        "lang": "vi",
        "publisher": "Phạm Hưng",
        "publicationYear": 2017,
        "subject": "Kiếm hiệp, Kim Dung",
        "description": "Truyện: Thiên Long bát bộ (bản mới) \nNguyên tác: 天龍八部\nTác giả: Kim Dung\n\n飛 Phi\n笑 Tiếu\n雪 Tuyết\n書 Thư\n連 Liên\n神 Thần\n天 Thiên\n俠 Hiệp\n射 Xạ\n倚 Ỷ\n白 Bạch\n碧 Bích\n鹿 Lộc\n鴛 Uyên\n",
        "format": "epub",
        "series": "Kim Dung",
        "bookUrl": "2d4d8d1c-a7a7-4d55-9658-5fb5f23cdb68.epub",
        "coverUrl": "dd86d0bf-cf87-4afc-bb75-b702612247ec.jpeg",
        "createdAt": "2023-07-22T09:02:17.000+00:00",
        "updatedAt": "2023-07-22T09:02:17.000+00:00"
    },
    {

        "id": 2,
        "category": [
            {
                "id": 4,
                "name": "Kim Dung"
            },
            {
                "id": 5,
                "name": "Kiếm Hiệp"
            }
        ],
        "title": "Lộc đỉnh ký",
        "author": "Kim Dung",
        "lang": "vi",
        "publisher": "Phạm Hưng",
        "publicationYear": 2017,
        "subject": "Kiếm hiệp, Kim Dung",
        "description": "Truyện: Lộc Đỉnh Ký\nTác giả: Kim Dung\nNguyên tác : 鹿鼎记\n\n飛 Phi\n笑 Tiếu\n雪 Tuyết\n書 Thư\n連 Liên\n神 Thần\n天 Thiên\n俠 Hiệp\n射 Xạ\n倚 Ỷ\n白 Bạch\n碧 Bích\n鹿 Lộc\n鴛 Uyên\n",
        "format": "epub",
        "series": "Kim Dung",
        "bookUrl": "4a0eddf1-6f9c-42c4-b90a-f113598ab6e6.epub",
        "coverUrl": "7dc5749c-4de7-4ecd-ab97-4a9bbb173c98.jpeg",
        "createdAt": "2023-07-22T08:48:24.000+00:00",
        "updatedAt": "2023-07-22T08:48:24.000+00:00"
    }
]






// console.log(typeof initialBookList);

// export default Book;
export default initialBookList