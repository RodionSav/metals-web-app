import { Metal } from "../types/metalType";

export const metals: Metal[] = [
  {
    id: 1,
    type: {
      ru: "Титан",
      en: "Titanium"
    },
    card_image: "images/titan.png",
    detail_image: "images/titan-details.png",
    items: [
      {
        item_name: {
          ru: "Прут, лист, труба",
          en: "Rod, sheet, pipe"
        },
        brand: "ВТ1-0, ОТ4, ВТ3-1 и др.",
        diameter_thickness: "Ф-10-120, d-2-10мм",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
    ],
  },
  {
    id: 2,
    type: {
      ru: "Алюминий",
      en: "Aluminum"
    },
    card_image: "images/aluminiy.png",
    detail_image: "images/aluminiy-details.png",
    items: [
      {
        item_name: {
          ru: "Плита, профиль, лента",
          en: "Plate, profile, tape"
        },
        brand: "АД31Т, АД31А, АМг",
        diameter_thickness: "6-150mm",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
      {
        item_name: {
          ru: "Пруток круглой",
          en: "Round rod"
        },
        brand: "АД1, АД31",
        diameter_thickness: "6-200mm",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
      {
        item_name: {
          ru: "Труба, уголок",
          en: "Pipe, corner"
        },
        brand: "АД31",
        diameter_thickness: "6-180mm",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
      {
        item_name: {
          ru: "Прокатка",
          en: "Rolling"
        },
        brand: "АМ, АТ",
        diameter_thickness: "6-10mm",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
      {
        item_name: {
          ru: "Шина электротехническая",
          en: "Electrical bus"
        },
        brand: "АД31, АД0",
        diameter_thickness: "6х20/12х12mm",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
    ],
  },
  {
    id: 3,
    type: {
      ru: "Бронза",
      en: "Bronze"
    },
    card_image: "images/bronza.png",
    detail_image: "images/bronza-details.png",
    items: [
      {
        item_name: {
          ru: "Плита",
          en: "Plate"
        },
        brand: "БрОФ, БрОФ4, БрОЦз",
        diameter_thickness: "6-15mm",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
      {
        item_name: {
          ru: "Пруток (Украина)",
          en: "Rod (Ukraine)"
        },
        brand: "ОЦС555",
        diameter_thickness: "Ф-22-200mm",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
      {
        item_name: {
          ru: "Труба (Украина/Россия)",
          en: "Pipe (Ukraine/Russia)"
        },
        brand: "БрЖМц",
        diameter_thickness: "Ф-18-160mm",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
      {
        item_name: {
          ru: "Прокатка",
          en: "Rolling"
        },
        brand: "БрКМц",
        diameter_thickness: "Ф-0.8-5mm",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
      {
        item_name: {
          ru: "Втулка, труба",
          en: "Bushing, pipe"
        },
        brand: "ОЦС555, БрОФ",
        diameter_thickness: "Ф-60-400mm",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
    ],
  },
  {
    id: 4,
    type: {
      ru: "Никель",
      en: "Nickel"
    },
    card_image: "images/nickel-details.png",
    detail_image: "images/nickel-details.png",
    items: [
      {
        item_name: {
          ru: "Проволока никелевая",
          en: "Nickel wire"
        },
        brand: "ХН78Т",
        diameter_thickness: "Ф-3-12mm",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
      {
        item_name: {
          ru: "Прокатка никелевая",
          en: "Nickel rolling"
        },
        brand: "29НК",
        diameter_thickness: "Ф-0.05-50mm",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
      {
        item_name: {
          ru: "Лента никелевая",
          en: "Nickel tape"
        },
        brand: "29НК, 47Ц",
        diameter_thickness: "Б/О-1.0mm",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
    ],
  },
  {
    id: 5,
    type: {
      ru: "Медь",
      en: "Copper"
    },
    card_image: "images/med.png",
    detail_image: "images/details-med.png",
    items: [
      {
        item_name: {
          ru: "Плита, плоская шина",
          en: "Plate, flat bus"
        },
        brand: "М1, М1Т, М2",
        diameter_thickness: "6-120mm",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
      {
        item_name: {
          ru: "Лента, фольга",
          en: "Tape, foil"
        },
        brand: "М1",
        diameter_thickness: "0.05-0.5mm",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
      {
        item_name: {
          ru: "Труба, круглая",
          en: "Pipe, round"
        },
        brand: "М1, М2",
        diameter_thickness: "6-120mm",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
      {
        item_name: {
          ru: "Прокатка",
          en: "Rolling"
        },
        brand: "М2",
        diameter_thickness: "Ф-0.8-100mm",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
      {
        item_name: {
          ru: "Медь бескислородная",
          en: "Oxygen-free copper"
        },
        brand: "М2",
        diameter_thickness: "Чушка",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
      {
        item_name: {
          ru: "Медь катодная",
          en: "Cathode copper"
        },
        brand: "М00к, М00к",
        diameter_thickness: "Лист 51 Вмм",
        price_per_kg: {
          ru: "уточните",
          en: "please inquire"
        },
      },
    ],
  },
];

export const reviews = [
  {
    id: 1,
    name: {
      ru: "Евгений Садков",
      en: "Evgeniy Sadkov"
    },
    position: {
      ru: "Программа – Экспресс Рассрочка",
      en: "Program – Express Installment"
    },
    image: "images/Evgeniy-img.png",
  },
  {
    id: 2,
    name: {
      ru: "Анастасия Майер",
      en: "Anastasia Mayer"
    },
    position: {
      ru: "Инвестиции – Вклад Активный",
      en: "Investments – Active Deposit"
    },
    image: "images/Anastasia-img.png",
  },
  {
    id: 3,
    name: {
      ru: "Фанзиль Гарипов",
      en: "Fanzil Garipov"
    },
    position: {
      ru: "Программа – Авто Рассрочка",
      en: "Program – Auto Installment"
    },
    image: "images/Faniel-img.png",
  },
  {
    id: 4,
    name: {
      ru: "Фанзиль Гарипов",
      en: "Fanzil Garipov"
    },
    position: {
      ru: "Программа – Авто Рассрочка",
      en: "Program – Auto Installment"
    },
    image: "images/Faniel-img.png",
  },
];
