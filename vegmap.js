var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.56667, 126.97806), //지도의 중심좌표.
	level: 13 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

const dataSet = [
	{
		title: "카페시바",
		address: "서울 용산구 한강대로 276-1 1층",
		url: "https://www.instagram.com/cafe.siva/",
		image: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/d5ZS/image/9dnt1mD1veGkbVgU6gbVxvUGMRU.jpg",
		category: "양식",
	},
	{
		title: "한상훈셰프",
		address: "서울 중구 소공로 29",
		url: "https://www.instagram.com/chef_sanghoon_han/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjEyMzBfMTYz%2FMDAxNjcyNDA4OTU0MDA5.sqZQQrd378xpiIUMRy9NWemf97XTbFqThLjHSuWRkWEg.NfPxABiV5NEJSZBGD67gBPuh3ZmvQpBoMGzXF5HqoSkg.JPEG%2FScreenshot_20221230_225229.jpg",
		category: "양식",
	},
	{
		title: "수잔네허브식당",
		address: "서울 마포구 월드컵로8길 41",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200218_227%2F15820300975402v1RQ_JPEG%2FC9KSdDEEKmy30cPShtft40ky.jpg",
		category: "일식",
	},
	{
		title: "프레쉬 엔지니어드",
		address: "서울 마포구 잔다리로 101-6",
		url: "https://www.instagram.com/fresh.engineered/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210910_9%2F1631254962362YO8zl_JPEG%2F8S7YBa9ZCm-wh_z7vMHpkXBL.jpeg.jpg",
		category: "양식",
	},
	{
		title: "셰발레리",
		address: "서울 마포구 포은로 52",
		url: "https://www.instagram.com/chezvalerie.vegan/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200821_206%2F1597988240416KIM1B_JPEG%2FS5qCVSidQlRCDmbinQthHwZd.jpg",
		category: "양식",
	},
	{
		title: "어라운드그린",
		address: "서울 마포구 동교로 44-1",
		url: "https://www.instagram.com/around_green/",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA3MTJfMjMw%2FMDAxNjg5MTM1NTE4MTc4.RdaeOBo69PMpRUAVo4iAebyGJEi1cjr3V8zwCiDoFGEg.FFS9xI2XO0JBCcaAj9Uj9P7FJCkdkU7ltlu42-A5EQ4g.JPEG.aej1503%2FIMG_0502.jpg",
		category: "양식",
	},
	{
		title: "아날로그가든",
		address: "서울 마포구 동교로 145",
		url: "https://www.instagram.com/around_green/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220111_233%2F1641879654392TXe4w_JPEG%2F20211219_094606.jpg",
		category: "카페/디저트",
	},
	{
		title: "몽크스부처",
		address: "서울 용산구 이태원로 228-1",
		url: "https://www.instagram.com/monksbutcher/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180123_49%2F1516705206267lHiLJ_JPEG%2FpcbzHthE5AzNkG8STYB6_Pn9.jpg",
		category: "양식",
	},
	{
		title: "슬런치팩토리",
		address: "서울 마포구 와우산로3길 38",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA3MTNfNDgg%2FMDAxNjg5MjE5NzU1MDI0.PPvkR06NcZC1ifk0P_65uI_S3UoxlYKXKi4CcXTsxGUg.g_Q9Ah-zTh7NZ_Pnks_jpsc_65zQWn1tAFL7AJBu9Swg.JPEG%2F3F8B2DF1-C856-42B7-979A-42C4A4299FAB.jpeg",
		category: "양식",
	},
	{
		title: "미스터리 (Mr.Lee)",
		address: "서울 서대문구 연세로7안길 41",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjExMTNfMTM5%2FMDAxNjY4MzUxMDAzODU4.Lizm9nv5_NUKRjjdWbp1bG7hqXP6NgRJIO1MKrTDuWQg.6OHr6a1F_T7QIvcV6ZhL4RcHsSAwmAan5PKmIEJXnkcg.JPEG%2F549CE488-307D-4160-B3E0-E81565BAC2B7.jpeg",
		category: "기타",
	},
	{
		title: "채식주의자",
		address: "서울 종로구 자하문로13길 4-7",
		url: "https://www.instagram.com/vegan_seochon/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20201105_165%2F16045647731912ODVC_JPEG%2Fimage.jpg",
		category: "카페/디저트",
	},
	{
		title: "로컬릿",
		address: "서울 성동구 한림말길 33",
		url: "https://www.instagram.com/the_local_eater/",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MTJfMjQ0%2FMDAxNjgzODY4NDYzMjIx.UK_w_0KMxX61wkcPVBQYcb626Go7-Ov21D_j59rYbtog.p8rsTM5yAMyaZloL5ERRH3DdPZjtHX1EXP130H5JOhYg.JPEG.ray0412%2FDSC02835.jpg",
		category: "양식",
	},
	{
		title: "마지",
		address: "서울 종로구 자하문로13길 4-7",
		url: "http://templefood.com/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220814_252%2F1660421539810B6QHr_JPEG%2F20220813_192022.jpg",
		category: "한식",
	},
	{
		title: "발우공양",
		address: "서울 종로구 우정국로 56",
		url: "http://balwoo.or.kr/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200804_226%2F1596531509722zvHCM_JPEG%2F%25C5%25A9%25B1%25E2%25BA%25AF%25C8%25AF20171119balwoo30939.jpg",
		category: "한식",
	},
	{
		title: "베이스이즈나이스",
		address: "서울 마포구 도화2길 20",
		url: "http://instagram.com/baseisnice_seoul",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MDVfMjIg%2FMDAxNjg1OTQxOTU0OTg1.9NMC8gHW0KysRV_SqCaCpE09fPvt6YntvIUvVAMaMy4g.6ELPb3f0ljPFi7LIGNtHBobLl6lSfnNz7VFfPhpKEQcg.JPEG.oshsrh412%2FIMG_1844.jpg",
		category: "한식",
	},
	{
		title: "베제투스",
		address: "서울 용산구 신흥로 59",
		url: "http://vegetus.kr/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20170719_59%2F150043097710722x7w_JPEG%2FKakaoTalk_Photo_2017-07-03-13-52-52.jpeg",
		category: "양식",
	},
	{
		title: "포리스트키친",
		address: "서울 송파구 올림픽로 300",
		url: "http://catchtable.co.kr/forestkitchen",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220525_149%2F1653453477411JuiwM_JPEG%2F2.%25C0%25CE%25C5%25D7%25B8%25AE%25BE%25EE4.jpg",
		category: "양식",
	},
	{
		title: "플랜트",
		address: "서울 용산구 보광로 117",
		url: "http://www.plantcafeseoul.com",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA3MDdfMjIy%2FMDAxNjg4NzA0MDM0ODE5.udUm-uZ_Urg41n57UJamyh0fyZDgAGlD0QbB4YvAU5gg.BDanA-fy24iXAyZXzmo3bHUBHf4_8nFrfC0jsNyt8nsg.JPEG%2F8B24C3CC-8D29-4EEF-81E6-4CE85253068C.jpeg",
		category: "카페/디저트",
	},
	{
		title: "공간녹음",
		address: "서울 강서구 공항대로 227",
		url: "https://www.instagram.com/nokumspace/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220923_166%2F1663897473061UO5VV_JPEG%2F8E4BED71-AAB1-4D7C-A4F6-84813EB7A315.jpeg",
		category: "양식",
	},
	{
		title: "남미플랜트랩",
		address: "서울 서초구 방배천로4안길 55",
		url: "http://instagram.com/nammiplantlab",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190901_184%2F15673131572767OLad_JPEG%2FwhmdB_x71YRdmdqJiTCymJur.jpg",
		category: "기타",
	},
	{
		title: "더브레드블루 신촌본점",
		address: "서울 마포구 신촌로12다길 3",
		url: "http://www.thebreadblue.com",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MjVfMTEw%2FMDAxNjgyNDEyNzQ3Njg5.im9NceONL9tr0aJVu2z-iRBYkVzSKLHiRgUNuc2Hlcsg.THhbQx2k1LT6QYahclXGH2XgQz3Cu3mOwJYq3y5WLG8g.JPEG.annicacho%2FIMG_6452.jpg",
		category: "카페/디저트",
	},
	{
		title: "두두리두팡",
		address: "서울 마포구 월드컵로23길 19",
		url: "https://www.instagram.com/duduri_dupang",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MTdfMjUy%2FMDAxNjg0MzE2MTQ0Mzc3.XjwcQmN0jnEAOFaQedFgBZdfF-Iaw6EIAEvzmbL0HT0g.NLrvei-7F6c6JdkiFBGOK5gp1BCQFyGOrB45_ghSW_sg.JPEG.kaylee1031%2FIMG_4103.jpg",
		category: "카페/디저트",
	},
	{
		title: "드렁큰비건",
		address: "서울 마포구 와우산로30길 13",
		url: "https://www.instagram.com/drunkenvegan101/",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjNfMTkw%2FMDAxNjc5NTM3Nzg3NDI5.f1nu314dO2jmr7yuBGrB7oyp5DjXnnm3tetKe91z-EEg.rDap3wF2cfKhX6f7lXWPEh2x-knijHpE1ULtotxlwA8g.JPEG.erreeer%2Foutput_4252758486.jpg",
		category: "기타",
	},
	{
		title: "산촌",
		address: "서울 종로구 인사동길 30-13",
		url: "http://www.sanchon.com/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA3MDFfMTQ5%2FMDAxNjg4MjIzMDMxMjEy.HIN9jCPS14W-YcjptTLMSTcR3mWVmoR2wMWEAnU5j6Qg.NaECr9fc9CcrQrK2BoAWQoul7Zn3Rz4prcwxuLYmEOsg.JPEG%2F20230701_211022.jpg",
		category: "한식",
	},
	{
		title: "큔",
		address: "서울 종로구 자하문로26길 17-2",
		url: "https://instagram.com/grocery_cafe_qyun",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221019_210%2F1666183538727Rca85_JPEG%2F20221019_172722.jpg",
		category: "카페/디저트",
	},
	{
		title: "소이로움",
		address: "서울 종로구 필운대로 41",
		url: "https://www.instagram.com/so_iroum/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20170906_293%2F15047067274435Bhdm_JPEG%2FGOl7aq_Lqs6WaB2IykVbHanp.jpg",
		category: "카페/디저트",
	},
	{
		title: "슬로우스테디",
		address: "경남 함안군 가야읍 성내남길 55",
		url: "http://www.instagram.com/slowsteady.cafe",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210524_241%2F1621805292523g1vjL_JPEG%2FvWlgAIcsBu4JB0Lnf-BKiWl3.jpeg.jpg",
		category: "카페/디저트",
	},
	{
		title: "미니모네",
		address: "경남 김해시 금관대로1365번길 10-10",
		url: "http://instagram.com/minimone0107",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MjdfMjU1%2FMDAxNjUzNjMyNjU4NDMy.nN8qv4OZwINNGePPvGT1ykznzkCxyfhsGBOkgUph-lYg.f2V1VW_LYJmK3aaozHQJMG6fUbvuU6JB6cpJkqxr8-0g.JPEG.twooink%2FKakaoTalk_20220526_134849939_12.jpg",
		category: "카페/디저트",
	},
	{
		title: "어나더비건",
		address: "경남 창원시 의창구 용지로293번길 28",
		url: "https://www.instagram.com/a_nothervegan/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA1MjhfMjg5%2FMDAxNjg1MjcxNjM1MDI1.fFm3JCCO3bIf3mM0BZBpEodVlc992GL6JBxaOacGKuEg.osMh4LpUxiZPq7DFvLLjBdyjxehv3cYdhH5iyM--61Eg.JPEG%2F4FE7B05A-51FC-4568-9DC7-A633AEDA6895.jpeg",
		category: "카페/디저트",
	},
	{
		title: "페이보릿비건",
		address: "경남 창원시 의창구 중동로 59",
		url: "https://www.instagram.com/favorite_vegan_/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230309_201%2F16783661840939ru5x_JPEG%2F2596C549-E26D-478F-8FF0-2D1820BA8B21.jpeg",
		category: "카페/디저트",
	},
	{
		title: "210이하나빵",
		address: "경남 창원시 마산합포구 오동북5길 36",
		url: "http://instagram.com/210_hanabbang",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MjNfNDgg%2FMDAxNjg0ODM5MzUwNzU3.uRWzqApJDGDnkOCyIuHtfVXPQcCsSNMF78qDwQ3QlK8g.SzDGlTPKRuKpph38_TfU6J1qnr7Vax0nHwgBJWzBlgAg.JPEG.alswl31885%2FIMG_1543.JPG",
		category: "카페/디저트",
	},
	{
		title: "비로소현미",
		address: "경남 창원시 마산회원구 구암남1길 19",
		url: "https://www.instagram.com/biroso.realrice/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210223_61%2F1614088978996sv2Hn_JPEG%2FYsHfTFCS-55PGcPZkgEBvSTJ.jpg",
		category: "카페/디저트",
	},
	{
		title: "메르시그린",
		address: "경남 진주시 에나로77번길 6-11",
		url: "https://www.instagram.com/merci__green/",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjVfMTk3%2FMDAxNjc3MzM0NDc5NTQy.SISdCf8hUf-wDzYtA6icnDuZo0K5FyzVTjZhKvxIRIkg.Bm-1-AydpsxzarmnTSSvq7hRgBTHcxfDe6XQIs_WW88g.JPEG.serendipit%2F20230223%25A3%25DF115458.jpg",
		category: "카페/디저트",
	},
	{
		title: "관포60",
		address: "경남 거제시 장목면 관포길 60",
		url: "http://instagram.com/gwanpo60_cafe",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210719_13%2F16266692558135G2E6_JPEG%2FYjn5AuFaWy99rBWSgeLFDnOF.jpeg.jpg",
		category: "카페/디저트",
	},
	{
		title: "한민이의 마크로비오틱",
		address: "부산 수영구 수영로522번길 41",
		url: "https://blog.naver.com/macro8",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA3MjBfNzMg%2FMDAxNjg5NzgyMTA2Nzg1.SZBfm8xj_tI44bbymNzngPucebSZdQv92tOMtybjkKgg._szC5oXq8_3p0uPoCCRTsmJDtirOxJc6xDE0X9BYpaog.JPEG%2F4BFC5881-9567-4E46-B49E-D9D172148F30.jpeg",
		category: "카페/디저트",
	},
	{
		title: "편한집밥",
		address: "부산 북구 만덕3로 28-10",
		url: "https://smartstore.naver.com/vegankit",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MDVfMjA5%2FMDAxNjgwNzA1OTgzODg3.7q08h59tpocBIXSWOL7GjPyTi1_wd95ezreqyAZphPkg.HzwizIx6SurEC1vV-B9VxdiyjodlcjRAUFYa4cwsr40g.JPEG.hng_bng%2FIMG_5996.jpg",
		category: "한식",
	},
	{
		title: "옥토가",
		address: "부산 수영구 수영로611번길 39-4",
		url: "https://www.instagram.com/oktoga/",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MTNfMTM3%2FMDAxNjU3NjgyMTQ1NDc4.lj6TtpcT6lJHFjZrjedknYyhe0cyIWaFO41G_2YzD2wg.k00FA08XXJHICX2cJvO9HDXXvQ9uec_HqfGP04zJ_wMg.JPEG.jhchoi0701%2F56DC0062-503B-4C58-8A64-16A8FA8C0CB0.jpeg",
		category: "카페/디저트",
	},
	{
		title: "오노마토피",
		address: "부산 수영구 남천동로16번길 13",
		url: "http://www.instagram.com/onomatopee__",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA2MDlfMTI4%2FMDAxNjg2MzEwMTU5NzYz.QDCILL_GiOfEYUjgknuC6z5V-dFW7GHBJW172lw7plsg.PZjjlQSEaS8AulJIrdAi7VnOTEd39QmlFLfB0Ml5bOgg.JPEG%2F20230609_165131.jpg",
		category: "기타",
	},
	{
		title: "에코토피아",
		address: "부산 수영구 수영로408번길 30-6",
		url: "https://blog.naver.com/eco_topia28",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191124_118%2F1574601453724zS470_JPEG%2F7qw053_YAW1fr9Dg7gnyu5Fv.jpg",
		category: "카페/디저트",
	},
	{
		title: "식스브레드",
		address: "부산 남구 신선로 566",
		url: "http://instagram.com/sixbread_",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA2MjZfMjQ5%2FMDAxNjg3NzczMzYwODI5.fKrHeSSkgq5lTzZp6w1dy3cXDizEfXzGTP_8Xj_PV2wg.mFFCPdtMT8ZGgwpV36be13OT2Rm2d7_QVIJ8vFCj05gg.JPEG%2F20230626_174152.jpg",
		category: "카페/디저트",
	},
	{
		title: "소반식당",
		address: "부산 서구 대영로85번길 21",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA1MTBfODkg%2FMDAxNjgzNzA0OTk3Mjc3.ey-tv4D74pw0KZeA4axVNKVIUyPhmcNnwx1ZJo8ZCG8g.0Y8h5ZdNRKK_Lmy2eRucJP-SdOCsa00fNoU1Lqy_akUg.JPEG%2F7046230B-385C-49AC-BD46-12CA3B5FD2E2.jpeg",
		category: "한식",
	},
	{
		title: "세자매바른빵",
		address: "부산 부산진구 범양로120번길 6",
		url: "https://smartstore.naver.com/sejamea",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA2MjJfMjQz%2FMDAxNjg3Mzk2MzUyMDkz.QgqOav0H6XjuP0N56VKagR58Dxy_hbjIta-oJZEpL4Ug.vFa-KWyPAw72H6wL76wIxFvnF9WaYUf5mrIxH4Rx4dwg.JPEG%2F16873963393453351005810773586106.jpg",
		category: "카페/디저트",
	},
	{
		title: "베지나랑",
		address: "부산 수영구 광안해변로370번길 9-32",
		url: "https://blog.naver.com/vege_narang",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTVfMTUy%2FMDAxNjc4ODkyMTM2ODk2.3bdLOwcy7xpB2mRtkExuuaaSKHmHQmhsb2M-L6OhbFQg.riJ-xNm-Ey_pQiw6qKEDatwjPX5XOC2T39cmifcS4IYg.JPEG.hmhm559%2F20220817_144211.jpg",
		category: "한식",
	},
	{
		title: "밀한줌",
		address: "부산 동래구 온천천로471번길 7",
		url: "https://smartstore.naver.com/milhanjum",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220504_298%2F1651642919222ERsjI_JPEG%2FDSC_8465.JPG",
		category: "카페/디저트",
	},
	{
		title: "매초롬",
		address: "부산 부산진구 봉수로 3",
		url: "https://smartstore.naver.com/maechorom_",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221020_198%2F1666192508514MYeoz_JPEG%2F1665318095742.jpg",
		category: "카페/디저트",
	},
	{
		title: "러브얼스",
		address: "부산 수영구 광안로49번길 32-1",
		url: "http://www.instagram.com/love_urth/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200723_9%2F1595466256688trIza_JPEG%2FLi-Pn3B56QRe7X7GozkVZW6v.jpg",
		category: "기타",
	},
	{
		title: "달선빵베이커리",
		address: "부산 북구 화명신도시로 115",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMDhfMTUz%2FMDAxNjcwNDY5NzEyOTgx.VmWFDkF2bt7u15xaiOfDLatoo7G0otJ6DyCwExkt9UIg._E71lMsxccb2ofdRvyGqo4IXW_801w48jSm9HPdmgS0g.JPEG.sc6548%2FKakaoTalk_20221208_114926673.jpg",
		category: "카페/디저트",
	},
	{
		title: "꽃피는 4월 밀익는 5월",
		address: "부산 수영구 망미번영로70번길 16",
		url: "https://blog.naver.com/seouljoy45",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210604_233%2F1622782004637TuCAr_JPEG%2F2AYWA6XxUTQoW7GCWWYryGV7.jpeg.jpg",
		category: "카페/디저트",
	},
	{
		title: "심심브레드",
		address: "경북 칠곡군 북삼읍 금오대로10길 23-5",
		url: "http://instagram.com/simsimbread",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200209_146%2F1581232150875KMByF_JPEG%2FYIhc9Gq8UnV3L40bwcSjd1Wx.jpg",
		category: "카페/디저트",
	},
	{
		title: "토리스",
		address: "울산 중구 신기4길 12",
		url: "https://www.instagram.com/toris_dining",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221029_170%2F1667013280753zuoiA_JPEG%2F0A3EE4B9-61EA-427D-8F43-4924B24BA08E.jpeg",
		category: "양식",
	},
	{
		title: "작은빵집",
		address: "울산 북구 강동산하5로 52",
		url: "http://www.instagram.com/smallbakery__",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MTBfMTUg%2FMDAxNjg2NDA2MzA5NDE4.Ux6e-1z-RreLLFMbtKQDbtIV9KaiaccrifI6e-N6fpwg.HNv_jMmLMTLG4O4JCJxI0Uitjd6zNxMVBZlaBDoI_OAg.JPEG.tjdfydwkd120%2F%25BF%25EF%25BB%25EA_%25BA%25F1%25B0%25C7%25BA%25A3%25C0%25CC%25C4%25BF%25B8%25AE_%25BB%25EA%25C7%25CF%25B5%25BF_%25C0%25DB%25C0%25BA%25BB%25A7%25C1%25FD_%252826%2529.jpg",
		category: "카페/디저트",
	},
	{
		title: "이화우",
		address: "울산 울주군 삼남읍 울산역로 274",
		url: "http://instagram.com/leehwawoo_",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA0MDNfMTE2%2FMDAxNjgwNDg1NDc3MDk4.tXqxHjHkKJDN4gRq8IHsl0-oKJhFjNfWc5VPbHuZzWIg.8YXuKkT0hnons2Q89T9nmIvNyw44lBmS-VP0VU_bTOMg.JPEG%2F48710984-6C9B-489C-9C6B-59E07985354E.jpeg",
		category: "카페/디저트",
	},
	{
		title: "단지",
		address: "울산 중구 함월3길 16",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MDVfMjc5%2FMDAxNjIwMjIzMTE5Nzg2.BoOFbSr0ILiBqwo46-SLbcIfBb69ZwbspenyJ0D5k9Yg.0uVjygPJ_YQvm0s4w5uIY1Iszs5xZYTlA9a2qFdAoD0g.JPEG.yura0625%2F20210505%25A3%25DF173954.jpg",
		category: "기타",
	},
	{
		title: "레쉬트",
		address: "경북 상주시 경상대로 2749-10",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210604_15%2F16227608308531BjNd_JPEG%2F3UoCvsER8Jrfejh1bS7wbZ9M.jpeg.jpg",
		category: "카페/디저트",
	},
	{
		title: "들밥상",
		address: "경북 상주시 왕산로 22",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMTBfMjQy%2FMDAxNjY1NDA5NTk3NzYw.sX2o7g8A7BgEZjvcMMftC4FgrtiF2WakbD68KBnB-wcg.KMpoXQGU1UImikT2kGj5hoCuAqJ5ZPdSmojsHdYYb5og.JPEG.kokoly52%2F20220923%25A3%25DF194639.jpg",
		category: "한식",
	},
	{
		title: "향적원",
		address: "경북 경주시 불국로 131",
		url: "https://sagejeolbab.tenclove.com/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20190802_204%2F1564708273059GV1dA_JPEG%2F69c560d1-e28a-43a1-8726-5e245585fd6b.jpg",
		category: "한식",
	},
	{
		title: "연화바루",
		address: "경북 경주시 대경로 4827",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MDJfNTEg%2FMDAxNjgzMDI4NzQyNzA4.aqwl6ALJvYdTd_YHNXqr4Ulh1XGLlBOwscjKH1vwIs4g.j-43NzGBjGmRJGg2ylTjhVsGZgcpYK6D9SGDwl3FJNUg.JPEG.cute0kitty%2Foutput_2688983180.jpg",
		category: "한식",
	},
	{
		title: "플레인플레이트",
		address: "대구 수성구 무학로21안길 13",
		url: "http://instagram.com/plainplate",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210224_6%2F1614145302425bJk7c_JPEG%2F9eJli8_xVg3f8zVrlFstXf9w.jpeg.jpg",
		category: "카페/디저트",
	},
	{
		title: "책빵고스란히",
		address: "대구 중구 국채보상로150길 65-3",
		url: "http://www.instagram.com/gosranhi_breadbook",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MzFfMjQ3%2FMDAxNjg1NTQzOTMxMTY0.-g7TrxdGK2Ov_EjPRF8mBLhtEoR0R411k7ytkw2ECqAg.CLTiGERTFdC6CD3XGAHDQVXRqTo_pNVewpBTLlBi-MEg.JPEG.rkadnwjd%2FKakaoTalk_20230531_232946729.jpg",
		category: "카페/디저트",
	},
	{
		title: "웬디베이킹",
		address: "대구 북구 구리로38길 16",
		url: "https://blog.naver.com/chj1726",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA2MDdfMTE0%2FMDAxNTU5ODcxODIyNzY2.HK4ir0es7QMPVtN15ClZBONQDYnX_Kchg-LfQx1MueQg.a0SX_Bb9qsJFSUs0gtye9Bb_iU-YS-zsWmtZ7TR8jE8g.JPEG.dodam1027%2F20190531_194936.jpg",
		category: "카페/디저트",
	},
	{
		title: "베지로운",
		address: "대구 동구 송라로16길 11",
		url: "https://smartstore.naver.com/vegeloun",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220216_35%2F1645007742368lffKM_JPEG%2FIMG_7550.JPG",
		category: "카페/디저트",
	},
	{
		title: "더순수브레드",
		address: "대구 북구 중앙대로 540",
		url: "http://thesoonsu.co.kr",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220719_256%2F1658228740439eAsPr_JPEG%2Fimage.jpg",
		category: "카페/디저트",
	},
	{
		title: "최소한끼",
		address: "전남 목포시 영산로 20",
		url: "https://choisohanggi.com",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20220916_66%2F1663294655391KK6ad_JPEG%2FIMG_2117.jpg",
		category: "양식",
	},
	{
		title: "빵과장미",
		address: "광주 동구 충장로46번길 8",
		url: "https://www.instagram.com/bakery_breadnrose",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230131_5%2F16751229342944rd0K_JPEG%2FKakaoTalk_20230131_084301175_01.jpg",
		category: "카페/디저트",
	},
	{
		title: "숨앤티",
		address: "전북 익산시 금마면 고도9길 29",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MjVfNDMg%2FMDAxNjg3Njk0NzA1NTcy.ld5cAAWj3O0xqoo1bJGbjszMMSf3b3-FamxisecAN5kg._4ebhAG49uTsnJiU6u1cTYt3JAKdJ0EDet3OFUhhvP0g.JPEG.shinseulgi94%2FIMG_9168.jpg",
		category: "카페/디저트",
	},
	{
		title: "남한산성",
		address: "전북 익산시 무왕로7길 34",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MzBfMTYw%2FMDAxNjg1NDUzNTA0OTk2.XafbWxzZ46gr0GGVs7Sz88CgJPjM2-655QVTXnoym-gg.Ki51BFWTo1X4ikvHdcXsIt6r2R0lUDpfQAAPJeVp0VYg.JPEG.tpgml579%2FIMG_3262.jpg",
		category: "한식",
	},
	{
		title: "채식주의자의무화과",
		address: "전북 전주시 완산구 선너머로 36",
		url: "https://smartstore.naver.com/figfromvegan",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjhfMTUx%2FMDAxNjc5OTkxMjc2NjYy.x2TO2odxNY3qdComLNETOq5bXAHmFrpCphkhDZux8ocg.MTcauc0S-yLIUZRz-D4gSqiJqZ4Wavp00hqPjxIvoZEg.JPEG.yejin5262%2F20230201_124600.jpg",
		category: "카페/디저트",
	},
	{
		title: "라므아르",
		address: "전북 전주시 완산구 봉곡로 47",
		url: "https://www.instagram.com/cafe_la_moire_",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA2MjdfMzUg%2FMDAxNjg3ODc3OTQzOTk0.4vN73qiAi8kKF24Skytb_Ts4AVuWV2zQZiqESUCIylAg.4aOypA2YSo6zHVk6NrakFJAv-KG6lP7mz3pLoRWtHSAg.JPEG%2F20230626133513_903A6006.JPG",
		category: "카페/디저트",
	},
	{
		title: "강's 브런치",
		address: "전북 전주시 완산구 서곡4길 9",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MjBfNTIg%2FMDAxNjg3MjM0NjAxMDc2.u7zZLlo0vEU4SSMt6tr1uqPtYrgbnmffmFpfB7Yj4k8g.GlFU77WtrR-tp6UEoWM8l85PggD3C3H6w8ChXWafc5og.JPEG.khg843%2FIMG_8753.JPG",
		category: "카페/디저트",
	},
	{
		title: "리앰브레드",
		address: "충남 천안시 동남구 충절로 29",
		url: "https://www.instagram.com/leeamfoods/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220217_102%2F1645106679830hEcOH_JPEG%2Fleeamfoods-image-14-01-2022.jpg",
		category: "카페/디저트",
	},
	{
		title: "세이비건",
		address: "대전 유성구 은구비서로24번길 51",
		url: "http://seivegan.kr",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA3MDhfMTIz%2FMDAxNjg4ODA2NDE1NTc3.zxZsum_3Of5-ecQdbCaBTTbTLKb3hj44kmpJtOBlwVwg.QEsqkIpJR1hL6uzGioOACAeoAQUWLozrG0rML2W5jwQg.JPEG%2F20230708_152649.jpg",
		category: "카페/디저트",
	},
	{
		title: "비건바닐라",
		address: "대전 서구 한밭대로656번길 32",
		url: "https://smartstore.naver.com/veganvanilla",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MDVfMjY3%2FMDAxNjgzMjkwMjkzNjcy.Q9fLf_RhgQ1ApYz6KlN9OUJs81TyXEwmGQqhy08L0Iwg.G46J8vHF2IWEzKOGfJowRBxJh33bBhc5R3vNW7UVulYg.JPEG.isky0825%2Fimage5533520601627105488Screenshot%25EF%25BC%253F20230409%25EF%25BC%253F122217%25EF%25BC%253FGallery.jpg",
		category: "카페/디저트",
	},
	{
		title: "도연제",
		address: "대전 유성구 은구비로155번길 32-13",
		url: "http://www.doyeonje.com",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA3MjBfMTg1%2FMDAxNjg5NzgyOTE4Mzc0.SNAjMBKWJhg5pseWhN7lswxewNdKyfLBYcUKN1d0bFIg.IFawCPf5VF9qC12JdqtjdZ0OH1H7Kx_ZgVji9PDF7UMg.JPEG%2FF35AE96A-698B-4B43-9B06-EC23A86A922B.jpeg",
		category: "카페/디저트",
	},
	{
		title: "하일",
		address: "충북 청주시 상당구 상당로91번길 2",
		url: "http://www.instagram.com/cafe.hail",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MDlfMjc3%2FMDAxNjgzNjAzOTU4NTM1.xACUywovwfuIgTtc9-O2r5xuh2uSJQdQ0v1ERFKthZYg.1NykHm6224q8gsnbvNyfdNQLxGico8hCKuMHGh3_0OEg.JPEG.pony1369%2Foutput_3868681403.jpg",
		category: "카페/디저트",
	},
	{
		title: "비건스토리여누",
		address: "충북 청주시 흥덕구 복대로163번길 27",
		url: "https://blog.naver.com/skyfly112",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180929_211%2F1538191341329hsRx2_JPEG%2F0zBzG8lfsu7lwNfG7GhoMApO.jpg",
		category: "카페/디저트",
	},
	{
		title: "풀내음",
		address: "강원 평창군 봉평면 메밀꽃길 13",
		url: "http://instagram.com/pulnaeum2001",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA3MTNfMjIw%2FMDAxNjg5MjU1OTI5OTI2.Z_4evNQNK51AlwRLoYVrfjLLRoUqbAL4Hh3yd92TTwkg.L4KC5FB8bXYQchpmfUn7xzTXi8oy6Q8SZG-1MpRlqU4g.JPEG%2FD9A9BDEA-F3B8-491D-8B4F-DEADA62AA975.jpeg",
		category: "한식",
	},
	{
		title: "빵야빵빵",
		address: "경기 화성시 동탄장지천5길 16-18",
		url: "https://www.instagram.com/hbbbangya",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210723_150%2F1627042277101HBODc_JPEG%2FKFxfE-z8QbfuDpHUQbKKHLH_.jpeg.jpg",
		category: "카페/디저트",
	},
	{
		title: "채식공간 녹두",
		address: "경기 파주시 산남로107번길 35-35",
		url: "https://www.instagram.com/nokdu35_35/?igshid=exi5huc48nld",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200629_259%2F1593395443905mvJUh_JPEG%2FPspWy3NfOHv40gBZvtj1aZZJ.jpg",
		category: "기타",
	},
	{
		title: "베지앙",
		address: "경기 파주시 맨드라미길 20",
		url: "https://www.instagram.com/vegeang_vegan/?igshid=1486yfdpz5kml",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210405_300%2F1617590556245lxxcX_JPEG%2FZWgantvJjEcUcpQAUbJfSSwQ.jpeg.jpg",
		category: "카페/디저트",
	},
	{
		title: "우리밀빵꿈터 건강담은",
		address: "경기 안양시 동안구 동편로184번길 9-6",
		url: "https://blog.naver.com/gundambread",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210309_27%2F161522375043424S2K_JPEG%2FRuelu_SrsB049t4qH-5sf6iT.jpg",
		category: "카페/디저트",
	},
	{
		title: "미오솜",
		address: "경기 안양시 동안구 관악대로 183",
		url: "https://blog.naver.com/we_miosom",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201110_107%2F1604986398077DqNPM_JPEG%2FIMG_6310.JPG",
		category: "카페/디저트",
	},
	{
		title: "마마앤파파",
		address: "경기 안산시 상록구 매화로1길 18",
		url: "https://blog.naver.com/kassa12",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20190615_198%2F1560573211090t4Io3_JPEG%2F5ea58d03-f479-479b-9068-23702250f8ee.jpg",
		category: "카페/디저트",
	},
	{
		title: "레이즈오븐",
		address: "경기 안산시 상록구 한양대학로 70",
		url: "https://smartstore.naver.com/lazeoven/products/5947325253",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210304_93%2F1614831501200nTG9d_JPEG%2FSZxkOd7h4CXqpiylPVa4_1eY.jpeg.jpg",
		category: "카페/디저트",
	},
	{
		title: "비건 비긴즈",
		address: "경기 수원시 영통구 센트럴타운로 106",
		url: "https://www.instagram.com/veganbegins2021",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210224_121%2F16141480031332LYdW_JPEG%2FK03JsMigsJwMxxUyRGs-jtUk.jpg",
		category: "카페/디저트",
	},
	{
		title: "두수고방",
		address: "경기 수원시 영통구 광교호수공원로 80",
		url: "https://www.instagram.com/doosoogobang/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220111_170%2F1641865084030oEUHO_PNG%2FDSDG_20220106_NEW_0.png",
		category: "한식",
	},
	{
		title: "에티컬테이블",
		address: "경기 성남시 수정구 복정로 57",
		url: "http://www.ethical-table.com",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MjhfMTc5%2FMDAxNjg1MjQ3OTgxMzQ3.Itij0qfD6ObPks875duZcqF6ceG5890uKrzoVwGD7sAg.1wP0RBL38nR6m_ROi0K4wmrIugJ_lPBjb8F1IY3vzW0g.JPEG.seojeong8024%2FDSC02499.jpg",
		category: "기타",
	},
	{
		title: "Ohnews",
		address: "경기 부천시 평천로 698",
		url: "http://instagram.com/ohnews",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210102_6%2F1609598718272bzMaK_JPEG%2FscFcDff8sl-iogdZhDWgzPgu.jpeg.jpg",
		category: "카페/디저트",
	},
	{
		title: "세컨드브리즈",
		address: "경기 부천시 조마루로97번길 22",
		url: "http://www.instagram.com/secondbreeze_vegan/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230319_26%2F1679235371855BScwF_JPEG%2F20220417_174922.jpg",
		category: "카페/디저트",
	},
	{
		title: "디어비건베이커리",
		address: "경기 부천시 소향로13번길 28-14",
		url: "http://instagram.com/dearvegan_bakery",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210417_249%2F1618662236536fqgFK_JPEG%2FsjMZ--FebBKs3UDe7tqdH8wO.jpg",
		category: "카페/디저트",
	},
	{
		title: "로포유",
		address: "경기 김포시 김포한강1로98번길 17-55",
		url: "http://smartstore.naver.com/lowdiet100",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200609_20%2F1591676669776NWt5x_JPEG%2Fl52VJtW_yWAwE7m1q-NdqkpT.jpg",
		category: "카페/디저트",
	},
	{
		title: "오무오무",
		address: "경기 고양시 일산동구 일산로380번길 35-1",
		url: "https://www.instagram.com/omuomu_vegan/",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTRfMyAg%2FMDAxNjc4NzY5Mjk5OTQz.D783varncA2ACpeqxuLJISle-y7jCJCzOFD0QvkNAwIg.CgIzS99XrVuz1henHzHW7pVb1xU1qonbTCROIHzAGd0g.JPEG.pscjs2%2FKakaoTalk_20230313_114842632_04.jpg",
		category: "카페/디저트",
	},
	{
		title: "땡스비건",
		address: "경기 고양시 일산동구 일산로441번길 42-10",
		url: "https://smartstore.naver.com/thanksvegan",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221103_248%2F16674036465776RCjM_JPEG%2F5BEE4C80-0893-4D91-B6CF-399390958757.jpeg",
		category: "카페/디저트",
	},
	{
		title: "비건무드",
		address: "인천 연수구 하모니로 144 ",
		url: "https://www.instagram.com/veganmood_official",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200805_299%2F1596553833322ixYCa_JPEG%2FCVumnowncSzNeor1GdsLk0RK.jpg",
		category: "카페/디저트",
	},
	{
		title: "로파이",
		address: "인천 계양구 계양문화로 119",
		url: "http://instagram.com/lofi_vegan",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210804_100%2F1628072491407j11Vo_JPEG%2FYzgdu25-Reb_RiKmvoXbaDvr.jpeg.jpg",
		category: "카페/디저트",
	},
	{
		title: "푸드더즈매터",
		address: "서울 서초구 서래로1길 10",
		url: "http://www.instagram.com/food_does_matter",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200305_247%2F1583374603714pOApc_JPEG%2Ff4rEpeEztQORptaKy7h582gM.jpg",
		category: "양식",
	},
	{
		title: "포포브레드",
		address: "서울 마포구 동교로18길 13",
		url: "https://blog.naver.com/forfourbread",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220504_265%2F1651638061297RFgSX_JPEG%2FKakaoTalk_Photo_2022-05-04-13-19-55.jpeg",
		category: "카페/디저트",
	},
	{
		title: "지구제과",
		address: "서울 마포구 성미산로29길 30-3",
		url: "http://instagram.com/jigu_bakery",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210120_286%2F1611130598229iV3Px_JPEG%2FhW5XR-bhRCDvYqa9Sy_Vqob3.jpeg.jpg",
		category: "카페/디저트",
	},
	{
		title: "휘게 카페 비건베이커리",
		address: "강원 강릉시 성덕로 123",
		url: "https://www.instagram.com/cafe_hygge_gn",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMDVfOTUg%2FMDAxNjY3NjUxNzg4MjU1.tq8eWPz2GftPY8Ue9yQwZcMiiUQrR2k0949oQXYm2usg.sjBMobOlnhwSPK8UD4QTiVPGjddQAVzzIBXvSfdcHQog.JPEG.yeoune_attic%2FIMG_5599.jpg",
		category: "카페/디저트",
	},
	{
		title: "서별",
		address: "강원 홍천군 영귀미면 공작산로 517-3",
		url: "https://www.instagram.com/cafe_seobyeol/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230427_62%2F1682561793024hRjzc_JPEG%2FKakaoTalk_20230427_111606397_01.jpg",
		category: "카페/디저트",
	},
	{
		title: "소양보리빵",
		address: "강원 춘천시 충혼길52번길 5-17",
		url: "https://www.instagram.com/soyang_bori",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221022_190%2F1666419360473nzN9M_JPEG%2FKakaoTalk_20221022_151132998_01.jpg",
		category: "카페/디저트",
	},
	{
		title: "맛나베이커리",
		address: "강원 춘천시 두하길 7",
		url: "https://www.instagram.com/mattna_bakery",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210713_40%2F1626104969967wMTpQ_JPEG%2FpuLfVX43kmPVOG-uYHhYNACA.jpeg.jpg",
		category: "카페/디저트",
	},
	{
		title: "비글제과",
		address: "충북 충주시 관아4길 15-1",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220806_41%2F1659771787903meYtf_JPEG%2F7F272A16-4BA2-4AC8-87C7-F97E070EAF2D.jpeg",
		category: "카페/디저트",
	},
	{
		title: "미쁨",
		address: "강원 원주시 바우골길 24-4",
		url: "http://www.instagram.com/mippeum_dessert",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA3MDJfMjQw%2FMDAxNjg4MjgxNjE3Njkz.xF93affiFCUGILUg-KaAdFtyLuTw4qP3tYQdVjeUnN0g.b6oVnmmpE6SWhRfDd9U2T6vtb9pRBLNQKmNRH5sKKIYg.JPEG%2F67BB975E-1248-4858-B23F-55FAB614CB3E.jpeg",
		category: "카페/디저트",
	},
	{
		title: "씨아이",
		address: "강원 원주시 삼광2길 39",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzAyMDRfMjcg%2FMDAxNjc1NDk5MDQ0NjM1.xrim2wIpY3DEj0ifAxHnYIDKpG5eTyjplTksIlxV438g.fzaBa-PG4jBjHx2sEzIWS7G1p8h8GpTFD1cY7ta7OVUg.JPEG%2F1675499009431.jpg",
		category: "카페/디저트",
	},
	{
		title: "비건으로",
		address: "경북 영주시 영주로 257-1",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230325_51%2F16797517802848JB9l_JPEG%2FB6C352F8-668B-4BD9-8716-22E818916952.jpeg",
		category: "한식",
	},
	{
		title: "하늘이 내리다 나린",
		address: "경북 예천군 용궁면 회룡포길 365",
		url: "https://www.instagram.com/na__lin365",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220413_74%2F1649813487215I1OpS_JPEG%2FKakaoTalk_20220413_103047305_02.jpg",
		category: "카페/디저트",
	},
	{
		title: "미실란밥카페반하다",
		address: "전남 곡성군 곡성읍 섬진강로 2584",
		url: "https://misillan.com",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200723_47%2F1595486870045MkQ2q_JPEG%2FL5JkQ72CLJA7G7Q4vU85YOj-.jpg",
		category: "한식",
	},
	{
		title: "베지나랑키친",
		address: "경남 거창군 남하면 대야길 69-17",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220805_82%2F1659658191617YWsnw_JPEG%2F%25BF%25DC%25B0%25FC2.jpg",
		category: "한식",
	},
	{
		title: "목월빵집",
		address: "전남 구례군 구례읍 서시천로 85",
		url: "http://www.instagram.com/mogwolbread",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190417_229%2F1555455705069qHvC3_JPEG%2FBhhMz-j0i_Lk3NIhajl9Fr2k.jpeg.jpg",
		category: "카페/디저트클ㄹ",
	},
	{
		title: "클래시비건",
		address: "광주 광산구 풍영로101번길 22",
		url: "https://www.instagram.com/classy_vegan_official/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220123_148%2F1642923203302dQugN_JPEG%2FIMG_20220109_202128_151.jpg",
		category: "카페/디저트",
	},
	{
		title: "비건이즈힙",
		address: "경기 화성시 동탄순환대로5길 13",
		url: "https://www.instagram.com/vegan.is.hip",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230309_116%2F1678330175954CApor_JPEG%2F59CEAEC2-6290-403B-AAB0-0608C4528EEA.jpeg",
		category: "카페/디저트",
	},
	{
		title: "몽밀",
		address: "경남 창원시 의창구 태복산로13번길 37",
		url: "https://www.instagram.com/mongmill_/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230115_291%2F1673762933521u28Lc_JPEG%2FKakaoTalk_20230115_150354767.jpg",
		category: "카페/디저트",
	},
	{
		title: "한스비건",
		address: "경기 남양주시 진접읍 부평로14번길 6",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210518_151%2F1621333740615tbj5s_JPEG%2F-fa18jrZoellhKsb--T3hHtE.jpg",
		category: "카페/디저트",
	},
	{
		title: "비건베이커리이담",
		address: "전북 군산시 백토로 144",
		url: "https://www.instagram.com/vegan_idam",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA3MDhfMjgy%2FMDAxNjg4NzkyMjExMDM0.wqQLWIxPtb_uYB8FrmHg_R0zeBZSNUgUHIyqoV9Yjskg.0-IOHwNfnD0gz5YiJc5Cy0DnAvJGi03coy-XrOJtQ6og.JPEG%2FC9EE98BA-24FB-46F8-8738-8E063038AC4B.jpeg",
		category: "카페/디저트",
	},
	{
		title: "모니모니해도비건",
		address: "경기 의왕시 신장승길 29",
		url: "https://www.instagram.com/mmv_vegan_bake_shop/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210415_122%2F16184595664106c9Kn_JPEG%2Fhe6C4qUciZQgYDtJSVpYBjlQ.jpeg.jpg",
		category: "카페/디저트",
	},
	{
		title: "본이",
		address: "경기 평택시 상서재로2길 56-10",
		url: "https://veganbakerybonie.modoo.at",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220509_38%2F1652078518359pQ6Dk_JPEG%2FKakaoTalk_20220509_151721940.jpg",
		category: "카페/디저트",
	},
	{
		title: "리미네 비건",
		address: "대전 서구 용소로46번길 43",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221104_242%2F16675424448405e21u_JPEG%2F6CBC540C-81AC-4449-8084-7C459BF31855.jpeg",
		category: "카페/디저트",
	},
	{
		title: "스윗비건 베이커리",
		address: "경기 시흥시 인선길 39",
		url: "http://instagram.com/sweetveganbakery",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220630_211%2F1656580445257Lcb5m_JPEG%2FScreenshot_20220623-202346_BAND.jpg",
		category: "카페/디저트",
	},
	{
		title: "카페이음",
		address: "경남 양산시 덕계2길 13-12",
		url: "https://www.instagram.com/cafe_eum_vegan/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230204_125%2F1675486822886uMhe2_JPEG%2F20230204_134218.jpg",
		category: "카페/디저트",
	},
	{
		title: "나소리비건",
		address: "경북 포항시 남구 오천읍 원동로105번길 7",
		url: "https://www.instagram.com/na_sori_vegan_",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220411_172%2F1649657768775yUi2e_JPEG%2FKakaoTalk_20220411_151527193.jpg",
		category: "카페/디저트",
	},
	{
		title: "연당 비건베이커리",
		address: "경기 하남시 조정대로 85",
		url: "https://www.instagram.com/yeondang_bakery",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220101_226%2F1641000718668am48r_JPEG%2F%25C5%25D7%25C0%25CC%25BA%25ED.JPG",
		category: "카페/디저트",
	},
	{
		title: "라라베지",
		address: "경기 구리시 건원대로76번길 37",
		url: "https://blog.naver.com/lalavege",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MTVfMjk2%2FMDAxNjg0MTIwMDMxMTUw.bY2zyrNPXCg3Li19MNn22qq6Letctc01yfB3gOu3OWQg.YPw0xEU3TN9nwIVP094t18l6Q4tfUq8sR5sTI3LsY2Ag.JPEG.jeo_eong%2FIMG_3660.JPG",
		category: "카페/디저트",
	},
	{
		title: "쿠비쿠비",
		address: "전남 목포시 하당로 100",
		url: "https://www.instagram.com/could_be__vegan",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230418_237%2F1681820011229ctNsK_JPEG%2F917BA50C-8AC9-4A71-9B5B-96E6B504A9C0.jpeg",
		category: "카페/디저트",
	},
	{
		title: "비건책방",
		address: "제주 제주시 조천읍 선흘동2길 46",
		url: "https://blog.naver.com/veganbooks_",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230406_216%2F1680770967571Ml4sV_JPEG%2FD898DB60-2ABE-48EC-82AC-762559E22285.jpeg",
		category: "카페/디저트",
	},
	{
		title: "오늘부터, 비건",
		address: "충남 서산시 호수공원1로 60",
		url: "https://www.instagram.com/today_vegan",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA2MDNfMjE2%2FMDAxNjU0MjM3OTQyNzAy.A3d__mE0hMh8JTCK-bfiqlebfCeGYZ_sQkqezDYh1QAg.Ka6iattGoSEsy1kfHDrmTKGOHyYLdvJbjGOOrgRerX0g.JPEG%2Fupload_f357e0d018b222fb98fc2bf71ca56294.jpg",
		category: "카페/디저트",
	},
	{
		title: "메이유비건",
		address: "충남 당진시 북문로1길 6-21",
		image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MjJfMTk3%2FMDAxNjE5MDg4MDg0NTAw.RNj--d548UQDEZSOtSW4Ap3L1Y63miMMq0QnYQ5YIssg.sN9ItQzM5rCujJzajG7UndS-Kp66DSt56zs7xRsxFAAg.JPEG.jieun8550%2FIMG_3294.jpg",
		category: "카페/디저트",
	},
	{
		title: "리벌스",
		address: "경기 평택시 고덕여염4로 41",
		url: "http://instagram.com/cafe_rebirth",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA3MDhfMjU2%2FMDAxNjg4ODA2MDg0ODk4.VvXvqERmJiGPQJXa7lOZgT7OTm-kVsBMyzgl7_NoNj0g.7R4CYj1dTp4PAsY-3ZiqbPzST_NhDM2VzF5V7iaY4QAg.JPEG%2F20230708_174524.jpg",
		category: "카페/디저트",
	},
	{
		title: "프레종",
		address: "전북 전주시 완산구 화산천변1길 10",
		url: "https://www.instagram.com/present_vegancafe/",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221011_51%2F1665479033012PBjh6_JPEG%2FKakaoTalk_20221011_092106811.jpg",
		category: "카페/디저트",
	},
	{
		title: "월든",
		address: "경북 청도군 각북면 헐티로 1262",
		url: "http://instagram.com/cafewalden",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220604_80%2F1654329877944IwK7u_JPEG%2F97E25C65-F25F-4861-847C-FEF49FEFA591.jpeg",
		category: "카페/디저트",
	},
	{
		title: "대화의장",
		address: "대구 중구 북성로 104-15",
		url: "http://daehwascene.com",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221223_92%2F16717851271709NoLV_JPEG%2F01.JPG",
		category: "양식",
	},
	{
		title: "오밀조밀",
		address: "경북 의성군 의성읍 동서1길 107",
		image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA2MDFfMTU1%2FMDAxNjg1NjMxMjA0MTc3.8uvyb3p90Zqh0tUFJKsBqQsWO8d0hNd0rJoJbEL1WsUg.7byNU6lLj3cHR8DjfR_37Uw1-BlpTBoJmdPBBK2DVjog.JPEG%2F20230601_175406.jpg",
		category: "카페/디저트",
	}
];

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();
function getCoordsByAddress(address) {
  // promise 형태로 반환
  return new Promise((resolve, reject) => {
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        return resolve(coords);
      }
      reject(new Error("getCoordsByAddress Error: not valid Address"));
    });
  });
}

setMap (dataSet);

function getContent(data) {
	return `
	<div class="infowindow">
		<div class="infowindow-img-container">
			<img 
				src="${data.image}"
				class="infowindow-img"
			/>
		</div>
		<div class="infowindow-body">
			<h5 class="infowindow-title">${data.title}</h5>
			<p class="infowindow-address">${data.address}</p>
			<a href="${data.url}" class="infowindow-btn"
			target="_blank">홈페이지</a>
		</div>
	</div> 
	`;
}

async function setMap(dataSet) {
	for (var i = 0; i < dataSet.length; i++) {
    	let coords = await getCoordsByAddress(dataSet[i].address);
    	var marker = new kakao.maps.Marker({
      		map: map,
      		position: coords,
    });

	markerArray.push(marker);

	// 마커에 표시할 인포윈도우를 생성합니다 
	var infowindow = new kakao.maps.InfoWindow({
		content: getContent(dataSet[i]), 
	});

	infowindowArray.push(infowindow);
	
	// 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
	// 이벤트 리스너로는 클로저를 만들어 등록합니다 
	// for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
	kakao.maps.event.addListener(
		marker, 'click',
		makeOverListener(map, marker, infowindow, coords));
	kakao.maps.event.addListener(
		map, 'click',
		makeOutListener(infowindow));
  }
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow, coords) {
    return function() {
		CloseInfoWindow();
        infowindow.open(map, marker);
		map.panTo(coords);
    };
}

let infowindowArray = [];
function CloseInfoWindow() {
	for (let infowindow of infowindowArray) {
		infowindow.close();
	}
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}

const categoryMap = {
	korea: "한식",
	america: "양식",
	cafe: "카페/디저트",
	etc: "기타",
  };

  const categoryList = document.querySelector(".category-list");
  categoryList.addEventListener("click", categoryHandler);
  
  function categoryHandler(event) {
	const categoryId = event.target.id;
	const category = categoryMap[categoryId];
  
	let categorizedDataSet = [];
	for (let data of dataSet) {
	  if (data.category === category) {
		categorizedDataSet.push(data);
	  }
	}
  
	// 기존 마커 삭제
	closeMarker();
  
	// 기존 인포윈도우 닫기
	CloseInfoWindow();
  
	setMap(categorizedDataSet);
  }
  
  let markerArray = [];
  function closeMarker() {
	for (marker of markerArray) {
	  marker.setMap(null);
	}
  }  