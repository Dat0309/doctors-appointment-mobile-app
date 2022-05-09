const doctors = [
    {
        first_name: "Vinh",
        last_name: "Nguyễn Xuân",
        date_of_birth: "1/1/1999",
        genre: "Nam",
        description: "Giám đốc điều hành bệnh viện Hoàn Mỹ Đà Lạt từ năm 2007, có hơn 40 năm kinh nghiệm khám và phẫu thuật các bệnh lý ngoại tổng quát, ngoại niệu, tiêu hoá... Có nhiều năm kinh nghiệm làm việc về khám chữa bệnh, nghiên cứu, giảng dạy chuyên Khoa Y Dược- Đại học Tây Nguyên, Khoa Ngoại Bệnh viện Đa Khoa Tỉnh Đắk Lắk. Tiến sỹ y khoa y dược TPHCM",
        telephone: "123456789",
        avatar_url: "https://www.hoanmydalat.com/upload/hoanmydalat.com/images/employee/2021-08-04/thumbnail_1628066913_JJTVo7oWsT.jpg",
        province: "Lâm Đồng",
        district: "Đà Lạt",
        ward: "Phường 8",
        street: "68 Đường Trần Khánh Dư",
        level_of_education: "Tiến Sỹ Y Khoa",
        specializations: [
            {
                id: "6278dd7963f52e91c16f1585",
            }
        ],
        company_id: "6278df3063f52e91c16f1595",
        user_id: "6278db9d63f52e91c16f156b",
    },
    {
        first_name: "Ba",
        last_name: "Phan Chánh",
        date_of_birth: "2/1/1999",
        genre: "Nam",
        description: "Phó giám đốc Quản lý chất lượng & kế hoạch tổng hợp Bệnh viện Hoàn Mỹ Đà Lạt từ năm 2014. Hơn 40 năm kinh nghiệm chuyên môn khoa Ngoại gồm khám chữa bệnh và quản lý. Nguyên Bác sĩ khoa Ngoại tại Bệnh viện Hương Phú - Bình Trị Thiên. Bệnh viện Đa khoa khu vực Thống Nhất - Đồng Nai",
        telephone: "123456789",
        avatar_url: "https://www.hoanmydalat.com/upload/hoanmydalat.com/images/employee/2017-10-04/thumbnail_1507100510_ot8jw5Q63b.jpg",
        province: "Lâm Đồng",
        district: "Đà Lạt",
        ward: "Phường 9",
        street: "68 Đường Trần Khánh Dư",
        level_of_education: "Bác sĩ Y Khoa ",
        specializations: [
            {
                id: "6278dd7963f52e91c16f1586",
            }
        ],
        company_id: "6278df3063f52e91c16f1596",
        user_id: "6278db9d63f52e91c16f156c",
    },
    {
        first_name: "Vinh",
        last_name: "Trịnh Văn",
        date_of_birth: "3/1/1999",
        genre: "Nam",
        description: "Phó giám đốc chuyên môn Bệnh viện Hoàn Mỹ Đà Lạt từ năm 2016. Hơn 21 năm kinh nghiệm khám chữa bệnh và quản lý. Kiêm Trưởng khoa Ngoại bệnh viện Hoàn Mỹ Đà Lạt. Nguyên Bác sĩ tại bệnh viện đa khoa khu vực Bồng Sơn - Bình Định",
        telephone: "123456789",
        avatar_url: "https://www.hoanmydalat.com/upload/hoanmydalat.com/images/employee/2017-10-04/thumbnail_1507100459_ezApoHG37w.jpg",
        province: "Lâm Đồng",
        district: "Đà Lạt",
        ward: "Phường 10",
        street: "68 Đường Trần Khánh Dư",
        level_of_education: "Bác sĩ Y Khoa",
        specializations: [
            {
                id: "6278dd7963f52e91c16f1585",
            }
        ],
        company_id: "6278df3063f52e91c16f1597",
        user_id: "6278db9d63f52e91c16f156d",
    },
    {
        first_name: "Sơn",
        last_name: "Lý Thanh",
        date_of_birth: "4/1/1999",
        genre: "Nam",
        description: "Với hơn 17 năm kinh nghiệm điều trị ngoại khoa. Tốt nghiệp Bác sĩ chuyên khoa cấp I chuyên ngành Chấn thương chỉnh hình tại Đại học Y DƯợc TP.HCM",
        telephone: "123456789",
        avatar_url: "https://www.hoanmydalat.com/upload/hoanmydalat.com/images/employee/2017-11-16/thumbnail_1510802098_mZb74HBjlF.jpg",
        province: "Lâm Đồng",
        district: "Đà Lạt",
        ward: "Phường 11",
        street: "68 Đường Trần Khánh Dư",
        level_of_education: "Bác sĩ Y Khoa",
        specializations: [
            {
                id: "6278dd7963f52e91c16f158f",
            }
        ],
        company_id: "6278df3063f52e91c16f15a0",
        user_id: "6278db9d63f52e91c16f156e",
    },
    {
        first_name: "Tòng",
        last_name: "Phạm Thanh",
        date_of_birth: "5/1/1999",
        genre: "Nam",
        description: "Với hơn 12 năm kinh nghiệm điều trị nội ngoại trú các bệnh lý ngoại khoa. Tốt nghiệp Bac sĩ Đa khoa trường Đại học Y Dược Huế. Tốt nghiệp chuyên khoa cấp I chuyên ngahf Ngoại tổng quát tại Đại học Y Dược TP.HCM và nhiều chứng chỉ chuyên khoa khác",
        telephone: "123456789",
        avatar_url: "https://www.hoanmydalat.com/upload/hoanmydalat.com/images/employee/2017-11-16/thumbnail_1510802127_Pnla4vFMZl.jpg",
        province: "Lâm Đồng",
        district: "Đà Lạt",
        ward: "Phường 12",
        street: "68 Đường Trần Khánh Dư",
        level_of_education: "Bác sĩ Y Khoa",
        specializations: [
            {
                id: "6278dd7963f52e91c16f158a",
            }
        ],
        company_id: "6278df3063f52e91c16f1599",
        user_id: "6278db9d63f52e91c16f156f",
    },
    {
        first_name: "Đi",
        last_name: "Bùi Quang",
        date_of_birth: "6/1/1999",
        genre: "Nam",
        description: "Tốt nghiệp thạc sĩ Y Khoa Đại học Y Dược TPHCM. Chứng chủ nội tiêu hoá của Bệnh viện Chợ rẫy. Chứng chỉ CT Scaner của Bệnh viện Chợ Rẫy. Chứng chỉ Nội soi dạ dày tá tràng của Bệnh viện Chợ Rẫy. Chứng chỉ nội tiêu hoá Bệnh viện Chợ Rẫy",
        telephone: "123456789",
        avatar_url: "https://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2017-11-20/thumbnail_1511171841_IfMTPlKROp.jpg",
        province: "Lâm Đồng",
        district: "Đà Lạt",
        ward: "Phường 13",
        street: "68 Đường Trần Khánh Dư",
        level_of_education: "Bác sĩ Y Khoa",
        specializations: [
            {
                id: "6278dd7963f52e91c16f1588",
            }
        ],
        company_id: "6278df3063f52e91c16f159b",
        user_id: "6278db9d63f52e91c16f1570",
    },
    {
        first_name: "Huy",
        last_name: "Nguyễn Ngọc",
        date_of_birth: "7/1/1999",
        genre: "Nam",
        description: "Tốt nghiệp Chuyên khoa I Nội khoa Đại học Y Dược Huế. Chứng chỉ Hồi sức cấp cứu Bệnh viện CHợ Rẫy. Chứng chỉ Thận nhân tạo Bệnh viện Chợ Rẫy. Chứng chủ cập nhật íinh lý",
        telephone: "123456789",
        avatar_url: "https://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2018-11-28/thumbnail_1543398554_EyWaG0ZDxQ.jpg",
        province: "Lâm Đồng",
        district: "Đà Lạt",
        ward: "Phường 14",
        street: "68 Đường Trần Khánh Dư",
        level_of_education: "Bác sĩ Y Khoa",
        specializations: [
            {
                id: "6278dd7963f52e91c16f1590",
            }
        ],
        company_id: "6278df3063f52e91c16f159f",
        user_id: "6278db9d63f52e91c16f1571",
    },
    {
        first_name: "Thao",
        last_name: "Nguyễn Ngọc",
        date_of_birth: "8/1/1999",
        genre: "Nam",
        description: "Tốt nghiệp Chuyên khoa I Nội khoa Đại học Y Dược Huế. Chứng chỉ Hồi sức cấp cứu Bệnh viện CHợ Rẫy. Chứng chỉ Thận nhân tạo Bệnh viện Chợ Rẫy. Chứng chủ cập nhật íinh lý",
        telephone: "123456789",
        avatar_url: "https://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2017-11-20/thumbnail_1511172336_AI5WNirrsU.jpg",
        province: "Lâm Đồng",
        district: "Đà Lạt",
        ward: "Phường 15",
        street: "68 Đường Trần Khánh Dư",
        level_of_education: "Bác sĩ Y Khoa",
        specializations: [
            {
                id: "6278dd7963f52e91c16f1592",
            }
        ],
        company_id: "6278df3063f52e91c16f159b",
        user_id: "6278db9d63f52e91c16f1572",
    },
    {
        first_name: "Thành",
        last_name: "Phan Nhật",
        date_of_birth: "9/1/1999",
        genre: "Nam",
        description: "Tốt nghiệp Chuyên khoa I Nội khoa Đại học Y Dược Huế. Chứng chỉ Hồi sức cấp cứu Bệnh viện CHợ Rẫy. Chứng chỉ Thận nhân tạo Bệnh viện Chợ Rẫy. Chứng chủ cập nhật íinh lý",
        telephone: "123456789",
        avatar_url: "https://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2017-11-22/thumbnail_1511315079_pDUgWgM0eE.jpg",
        province: "Lâm Đồng",
        district: "Đà Lạt",
        ward: "Phường 16",
        street: "68 Đường Trần Khánh Dư",
        level_of_education: "Bác sĩ Y Khoa",
        specializations: [
            {
                id: "6278dd7963f52e91c16f1586",
            }
        ],
        company_id: "6278df3063f52e91c16f1596",
        user_id: "6278db9d63f52e91c16f1573",
    },
    {
        first_name: "Lâm",
        last_name: "Nguyễn Tấn",
        date_of_birth: "10/1/1999",
        genre: "Nam",
        description: "Tốt nghiệp Chuyên khoa I Nội khoa Đại học Y Dược Huế. Chứng chỉ Hồi sức cấp cứu Bệnh viện CHợ Rẫy. Chứng chỉ Thận nhân tạo Bệnh viện Chợ Rẫy. Chứng chủ cập nhật íinh lý",
        telephone: "123456789",
        avatar_url: "https://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2017-11-20/thumbnail_1511172713_r3bubdmwlu.jpg",
        province: "Lâm Đồng",
        district: "Đà Lạt",
        ward: "Phường 17",
        street: "68 Đường Trần Khánh Dư",
        level_of_education: "Bác sĩ Y Khoa",
        specializations: [
            {
                id: "6278dd7963f52e91c16f158c",
            }
        ],
        company_id: "6278df3063f52e91c16f1598",
        user_id: "6278db9d63f52e91c16f1574",
    },
    {
        first_name: "Kha",
        last_name: "Vũ Đình",
        date_of_birth: "11/1/1999",
        genre: "Nam",
        description: "Tốt nghiệp Chuyên khoa I Nội khoa Đại học Y Dược Huế. Chứng chỉ Hồi sức cấp cứu Bệnh viện CHợ Rẫy. Chứng chỉ Thận nhân tạo Bệnh viện Chợ Rẫy. Chứng chủ cập nhật íinh lý",
        telephone: "123456789",
        avatar_url: "https://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2017-11-20/thumbnail_1511172813_MOrthA9HqD.jpg",
        province: "Lâm Đồng",
        district: "Đà Lạt",
        ward: "Phường 18",
        street: "68 Đường Trần Khánh Dư",
        level_of_education: "Bác sĩ Y Khoa",
        specializations: [
            {
                id: "6278dd7963f52e91c16f1592",
            }
        ],
        company_id: "6278df3063f52e91c16f159b",
        user_id: "6278db9d63f52e91c16f1575",
    },
    {
        first_name: "Tiền",
        last_name: "Nguyễn Đình",
        date_of_birth: "12/1/1999",
        genre: "Nam",
        description: "Tốt nghiệp Chuyên khoa I Nội khoa Đại học Y Dược Huế. Chứng chỉ Hồi sức cấp cứu Bệnh viện CHợ Rẫy. Chứng chỉ Thận nhân tạo Bệnh viện Chợ Rẫy. Chứng chủ cập nhật íinh lý",
        telephone: "123456789",
        avatar_url: "https://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2017-11-20/thumbnail_1511172916_D5pXdVAgIj.JPG",
        province: "Lâm Đồng",
        district: "Đà Lạt",
        ward: "Phường 19",
        street: "68 Đường Trần Khánh Dư",
        level_of_education: "Bác sĩ Y Khoa",
        specializations: [
            {
                id: "6278dd7963f52e91c16f1586",
            }
        ],
        company_id: "6278df3063f52e91c16f159d",
        user_id: "6278db9d63f52e91c16f1576",
    },
    {
        first_name: "Tuấn Anh",
        last_name: "Phạm Thọ",
        date_of_birth: "13/1/1999",
        genre: "Nam",
        description: "Tốt nghiệp Chuyên khoa I Nội khoa Đại học Y Dược Huế. Chứng chỉ Hồi sức cấp cứu Bệnh viện CHợ Rẫy. Chứng chỉ Thận nhân tạo Bệnh viện Chợ Rẫy. Chứng chủ cập nhật íinh lý",
        telephone: "123456789",
        avatar_url: "https://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2017-11-20/thumbnail_1511173072_badoWGswKV.jpg",
        province: "Lâm Đồng",
        district: "Đà Lạt",
        ward: "Phường 20",
        street: "68 Đường Trần Khánh Dư",
        level_of_education: "PGS, TS Y Khoa",
        specializations: [
            {
                id: "6278dd7963f52e91c16f1586",
            }
        ],
        company_id: "6278df3063f52e91c16f159d",
        user_id: "6278db9d63f52e91c16f1577",
    },
    {
        first_name: "Ngân",
        last_name: "Lê Thị Kim",
        date_of_birth: "14/1/1999",
        genre: "Nam",
        description: "Tốt nghiệp Chuyên khoa I Nội khoa Đại học Y Dược Huế. Chứng chỉ Hồi sức cấp cứu Bệnh viện CHợ Rẫy. Chứng chỉ Thận nhân tạo Bệnh viện Chợ Rẫy. Chứng chủ cập nhật íinh lý",
        telephone: "123456789",
        avatar_url: "https://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2018-09-24/thumbnail_1537754647_BSiUPuftGx.jpg",
        province: "Lâm Đồng",
        district: "Đà Lạt",
        ward: "Phường 21",
        street: "68 Đường Trần Khánh Dư",
        level_of_education: "Bác sĩ Y Khoa",
        specializations: [
            {
                id: "6278dd7963f52e91c16f1589",
            }
        ],
        company_id: "6278df3063f52e91c16f159a",
        user_id: "6278db9d63f52e91c16f1578",
    },
    {
        first_name: "Huy",
        last_name: "Trần Nguyễn Anh",
        date_of_birth: "15/1/1999",
        genre: "Nam",
        description: "Tốt nghiệp Chuyên khoa I Nội khoa Đại học Y Dược Huế. Chứng chỉ Hồi sức cấp cứu Bệnh viện CHợ Rẫy. Chứng chỉ Thận nhân tạo Bệnh viện Chợ Rẫy. Chứng chủ cập nhật íinh lý",
        telephone: "123456789",
        avatar_url: "https://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2017-11-20/thumbnail_1511173368_APft3NKC0x.JPG",
        province: "Lâm Đồng",
        district: "Đà Lạt",
        ward: "Phường 22",
        street: "68 Đường Trần Khánh Dư",
        level_of_education: "Bác sĩ Y Khoa",
        specializations: [
            {
                id: "6278dd7963f52e91c16f1586",
            }
        ],
        company_id: "6278df3063f52e91c16f15a0",
        user_id: "6278db9d63f52e91c16f1579",
    },
    {
        first_name: "Lan",
        last_name: "Mai Thị Hương",
        date_of_birth: "16/1/1999",
        genre: "Nam",
        description: "Tốt nghiệp Chuyên khoa I Nội khoa Đại học Y Dược Huế. Chứng chỉ Hồi sức cấp cứu Bệnh viện CHợ Rẫy. Chứng chỉ Thận nhân tạo Bệnh viện Chợ Rẫy. Chứng chủ cập nhật íinh lý",
        telephone: "123456789",
        avatar_url: "https://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2017-11-22/thumbnail_1511315059_wjmSGjIZwG.jpg",
        province: "Lâm Đồng",
        district: "Đà Lạt",
        ward: "Phường 23",
        street: "68 Đường Trần Khánh Dư",
        level_of_education: "Bác sĩ Y Khoa",
        specializations: [
            {
                id: "6278dd7963f52e91c16f158f",
            }
        ],
        company_id: "6278df3063f52e91c16f159d",
        user_id: "6278db9d63f52e91c16f157a",
    },
    {
        first_name: "Hạnh",
        last_name: "Trần Thị Minh",
        date_of_birth: "17/1/1999",
        genre: "Nam",
        description: "Tốt nghiệp Chuyên khoa I Nội khoa Đại học Y Dược Huế. Chứng chỉ Hồi sức cấp cứu Bệnh viện CHợ Rẫy. Chứng chỉ Thận nhân tạo Bệnh viện Chợ Rẫy. Chứng chủ cập nhật íinh lý",
        telephone: "123456789",
        avatar_url: "https://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2018-03-22/thumbnail_1521703596_GHmBScmWR3.JPG",
        province: "Lâm Đồng",
        district: "Đà Lạt",
        ward: "Phường 24",
        street: "68 Đường Trần Khánh Dư",
        level_of_education: "Tiến sỹ Y Khoa",
        specializations: [
            {
                id: "6278dd7963f52e91c16f158e",
            }
        ],
        company_id: "6278df3063f52e91c16f159f",
        user_id: "6278db9d63f52e91c16f157b",
    },
    {
        first_name: "Thuyết",
        last_name: "Nguyễn Phước",
        date_of_birth: "18/1/1999",
        genre: "Nam",
        description: "Tốt nghiệp Chuyên khoa I Nội khoa Đại học Y Dược Huế. Chứng chỉ Hồi sức cấp cứu Bệnh viện CHợ Rẫy. Chứng chỉ Thận nhân tạo Bệnh viện Chợ Rẫy. Chứng chủ cập nhật íinh lý",
        telephone: "123456789",
        avatar_url: "https://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2017-11-27/thumbnail_1511744757_LRIGIwmDwm.jpg",
        province: "Lâm Đồng",
        district: "Đà Lạt",
        ward: "Phường 25",
        street: "68 Đường Trần Khánh Dư",
        level_of_education: "Bác sĩ Y Khoa",
        specializations: [
            {
                id: "6278dd7963f52e91c16f1585",
            }
        ],
        company_id: "6278df3063f52e91c16f1595",
        user_id: "6278db9d63f52e91c16f157c",
    },
    {
        first_name: "Nhựt",
        last_name: "Trần Minh",
        date_of_birth: "19/1/1999",
        genre: "Nam",
        description: "Tốt nghiệp Chuyên khoa I Nội khoa Đại học Y Dược Huế. Chứng chỉ Hồi sức cấp cứu Bệnh viện CHợ Rẫy. Chứng chỉ Thận nhân tạo Bệnh viện Chợ Rẫy. Chứng chủ cập nhật íinh lý",
        telephone: "123456789",
        avatar_url: "https://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2018-09-24/thumbnail_1537755008_0u8UvGWbb7.jpg",
        province: "Lâm Đồng",
        district: "Đà Lạt",
        ward: "Phường 26",
        street: "68 Đường Trần Khánh Dư",
        level_of_education: "Bác sĩ Y Khoa",
        specializations: [
            {
                id: "6278dd7963f52e91c16f1587",
            }
        ],
        company_id: "6278df3063f52e91c16f159c",
        user_id: "6278db9d63f52e91c16f157d",
    }
];

export default doctors;