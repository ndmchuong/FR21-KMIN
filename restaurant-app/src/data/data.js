import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"
import feature1 from "../assets/feature1.jpg"
import feature2 from "../assets/feature2.jpg"
import feature3 from "../assets/feature3.jpg"
import feature4 from "../assets/feature4.jpg"
import imgBlackCoffee from "../assets/coffee/black-coffee.jpg"
import imgRichMilk from "../assets/coffee/rich-milk-coffee.jpg"
import imgAmericano from "../assets/coffee/americano.jpg"
import imgCappuccino from "../assets/coffee/cappuccino.jpg"
import imgLatte from "../assets/coffee/latte.jpg"
import imgBerryYogurt from "../assets/tea/berry-yogurt.jpg"
import imgBlackTeaLatte from "../assets/tea/black-tea-latte.jpeg"
import imgOlongtea from "../assets/tea/olong-tea.jpg"
import imgGL from "../assets/tea/green-tea-latte.jpg"
import imgPeachStrawberryLatte from "../assets/tea/peach-strawberry-latte.jpg"
import imgPeachTea from "../assets/tea/peach tea.jpg" 
import imgLycheeTea from "../assets/tea/lychee-tea.jpg"
import imgStrawberryTea from "../assets/tea/strawberry-tea.jpg"


export const dataBanner = [
    {
        url: banner1,
        desc: "Kết hợp không gian trong nhà và sân vườn" 
    },
    {
        url: banner2,
        desc: "Tuyển chọn những nguyên liệu hảo hạng"
    },
    {
        url: banner3,
        desc: "Dịch vụ chuyên nghiệp-tận tình-chu đáo"
    }
]
export const dataFeature = [
    {
        title: "Không gian",
        desc: "Được thiết kế với 2 không gian: Trong Nhà và Sân Vườn. Vừa đáp ứng được nhu cầu tìm một không gian yên tĩnh để học tập, làm việc, đọc sách, ... lại vừa phù hợp với những khách hàng tìm kiếm không gian hòa hợp với thiên nhiên",
        urlImg: feature1
    },
    {
        title: "View chất",
        desc: "Đến với không gian tại DC Coffee, các bạn trẻ sẽ tìm được cho mình những góc sống ảo cực chất với view ngắm máy bay trên bầu trời, ngắm nhìn thành phố về đêm, các kiến trúc độc đáo tại cửa hàng,...",
        urlImg: feature2
    },
    {
        title: "Sách",
        desc: "Một cuốn sách là một giấc mơ mà bạn cầm trong tay, và với rất nhiều đầu sách đang có mặt tại cửa hàng, chúng tôi hi vọng sẽ mang đến những người yêu sách những quyển sách hay nhất, không gian lý tưởng nhất để bạn thưởng thức quyển sách yêu thích của mình",
        urlImg: feature3
    },
    {
        title: "Và không thể thiếu trà và cà phê",
        desc: "Chúng tôi tin rằng từng sản phẩm trà và cà phê sẽ càng thêm hảo hạng khi được tạo ra từ sự phấn đấu không ngừng cùng niềm đam mê sẽ góp phần mang đến những nét đẹp trong văn hóa thưởng trà và cà phê ngày càng bay cao, vươn xa",
        urlImg: feature4
    }
]
export const dataMenu = [
    {
        id: 1,
        type: "coffee",
        name: "Phin đen đá",
        img: imgBlackCoffee,
        option: [
            {
                size: "hot",
                price: 25000
            },
            {
                size: "M",
                price: 30000
            },
            {
                size: "L",
                price: 40000
            }
        ]
    },
    {
        id: 2,
        type: "coffee",
        name: "Phin sữa đá",
        img: imgRichMilk,
        option: [
            {
                size: "hot",
                price: 25000
            },
            {
                size: "M",
                price: 30000
            },
            {
                size: "L",
                price: 40000
            }
        ]
    },
    {
        id: 3,
        type: "coffee",
        name: "Cà phê Americano",
        img: imgAmericano,
        option: [
            {
                size: "hot",
                price: 25000
            },
            {
                size: "M",
                price: 30000
            },
            {
                size: "L",
                price: 40000
            }
        ]
    },
    {
        id: 4,
        type: "coffee",
        name: "Cà phê Cappuccino",
        img: imgCappuccino,
        option: [
            {
                size: "hot",
                price: 30000
            },
            {
                size: "M",
                price: 35000
            },
            {
                size: "L",
                price: 45000
            }
        ]
    },
    {
        id: 5,
        type: "coffee",
        name: "Cà phê Latte",
        img: imgLatte,
        option: [
            {
                size: "hot",
                price: 30000
            },
            {
                size: "M",
                price: 35000
            },
            {
                size: "L",
                price: 45000
            }
        ]
    },
    {
        id: 6,
        type: "tea",
        name: "Hồng trà sữa",
        img: imgBlackTeaLatte,
        option: [
            {
                size: "M",
                price: 45000
            },
            {
                size: "L",
                price: 50000
            }
        ]
    },
    {
        id: 7,
        type: "tea",
        name: "Trà Oloong sữa",
        img: imgOlongtea,
        option: [
            {
                size: "M",
                price: 45000
            },
            {
                size: "L",
                price: 50000
            }
        ]
    },
    {
        id: 8,
        type: "tea",
        name: "Trà xanh sữa",
        img: imgGL,
        option: [
            {
                size: "M",
                price: 40000
            },
            {
                size: "L",
                price: 45000
            }
        ]
    },
    {
        id: 9,
        type: "tea",
        name: "Trà thạch đào dâu sữa",
        img: imgPeachStrawberryLatte,
        option: [
            {
                size: "M",
                price: 55000
            },
            {
                size: "L",
                price: 65000
            }
        ]
    },
    {
        id: 10,
        type: "tea",
        name: "Berry berry yogurt",
        img: imgBerryYogurt,
        option: [
            {
                size: "M",
                price: 60000
            },
            {
                size: "L",
                price: 70000
            }
        ]
    },
    {
        id: 11,
        type: "tea",
        name: "Trà vải",
        img: imgLycheeTea,
        option: [
            {
                size: "M",
                price: 45000
            },
            {
                size: "L",
                price: 55000
            }
        ]
    },
    {
        id: 12,
        type: "tea",
        name: "Trà đào",
        img: imgPeachTea,
        option: [
            {
                size: "M",
                price: 45000
            },
            {
                size: "L",
                price: 55000
            }
        ]
    },
    {
        id: 13,
        type: "tea",
        name: "Trà dâu",
        img: imgStrawberryTea,
        option: [
            {
                size: "M",
                price: 45000
            },
            {
                size: "L",
                price: 55000
            }
        ]
    }
]