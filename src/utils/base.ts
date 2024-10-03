import { Metal } from "../types/metalType";

export const metals: Metal[] = [
  {
    id: 1,
    type: "Титан",
    card_image: "images/titan.png",
    detail_image: "images/titan-details.png",
    items: [
      {
        item_name: "Прут, лист, труба",
        brand: "ВТ1-0, ОТ4, ВТ3-1 и др.",
        diameter_thickness: "Ф-10-120, d-2-10мм",
        price_per_kg: "уточните",
      },
    ],
  },
  {
    id: 2,
    type: "Алюминий",
    card_image: "images/aluminiy.png",
    detail_image: "images/aluminiy-details.png",
    items: [
      {
        item_name: "Плита, профиль, лента",
        brand: "АД31Т, АД31А, АМг",
        diameter_thickness: "6-150mm",
        price_per_kg: "уточните",
      },
      {
        item_name: "Пруток круглой",
        brand: "АД1, АД31",
        diameter_thickness: "6-200mm",
        price_per_kg: "уточните",
      },
      {
        item_name: "Труба, уголок",
        brand: "АД31",
        diameter_thickness: "6-180mm",
        price_per_kg: "уточните",
      },
      {
        item_name: "Прокатка",
        brand: "АМ, АТ",
        diameter_thickness: "6-10mm",
        price_per_kg: "уточните",
      },
      {
        item_name: "Шина электротехническая",
        brand: "АД31, АД0",
        diameter_thickness: "6х20/12х12mm",
        price_per_kg: "уточните",
      },
    ],
  },
  {
    id: 3,
    type: "Бронза",
    card_image: "images/bronza.png",
    detail_image: "images/bronza-details.png",
    items: [
      {
        item_name: "Плита",
        brand: "БрОФ, БрОФ4, БрОЦз",
        diameter_thickness: "6-15mm",
        price_per_kg: "уточните",
      },
      {
        item_name: "Пруток (Украина)",
        brand: "ОЦС555",
        diameter_thickness: "Ф-22-200mm",
        price_per_kg: "уточните",
      },
      {
        item_name: "Труба (Украина/Россия)",
        brand: "БрЖМц",
        diameter_thickness: "Ф-18-160mm",
        price_per_kg: "уточните",
      },
      {
        item_name: "Прокатка",
        brand: "БрКМц",
        diameter_thickness: "Ф-0.8-5mm",
        price_per_kg: "уточните",
      },
      {
        item_name: "Втулка, труба",
        brand: "ОЦС555, БрОФ",
        diameter_thickness: "Ф-60-400mm",
        price_per_kg: "уточните",
      },
    ],
  },
  {
    id: 4,
    type: "Никель",
    card_image: "images/nickel-details.png",
    detail_image: "images/nickel-details.png",
    items: [
      {
        item_name: "Проволока никелевая",
        brand: "ХН78Т",
        diameter_thickness: "Ф-3-12mm",
        price_per_kg: "уточните",
      },
      {
        item_name: "Прокатка никелевая",
        brand: "29НК",
        diameter_thickness: "Ф-0.05-50mm",
        price_per_kg: "уточните",
      },
      {
        item_name: "Лента никелевая",
        brand: "29НК, 47Ц",
        diameter_thickness: "Б/О-1.0mm",
        price_per_kg: "уточните",
      },
    ],
  },
  {
    id: 5,
    type: "Медь",
    card_image: "images/med.png",
    detail_image: "images/details-med.png",
    items: [
      {
        item_name: "Плита, плоская шина",
        brand: "М1, М1Т, М2",
        diameter_thickness: "6-120mm",
        price_per_kg: "уточните",
      },
      {
        item_name: "Лента, фольга",
        brand: "М1",
        diameter_thickness: "0.05-0.5mm",
        price_per_kg: "уточните",
      },
      {
        item_name: "Труба, круглая",
        brand: "М1, М2",
        diameter_thickness: "6-120mm",
        price_per_kg: "уточните",
      },
      {
        item_name: "Прокатка",
        brand: "М2",
        diameter_thickness: "Ф-0.8-100mm",
        price_per_kg: "уточните",
      },
      {
        item_name: "Медь бескислородная",
        brand: "М2",
        diameter_thickness: "Чушка",
        price_per_kg: "уточните",
      },
      {
        item_name: "Медь катодная",
        brand: "М00к, М00к",
        diameter_thickness: "Лист 51 Вмм",
        price_per_kg: "уточните",
      },
    ],
  },
  {
    id: 6,
    type: "Латунь",
    card_image: "images/latun.png",
    detail_image: "images/detail-latun.png",
    items: [
      {
        item_name: "Плита",
        brand: "ЛС59, Л63",
        diameter_thickness: "6-150mm, 60х1500мм",
        price_per_kg: "уточните",
      },
      {
        item_name: "Пруток",
        brand: "Л63, ЛС63",
        diameter_thickness: "6-200mm",
        price_per_kg: "уточните",
      },
      {
        item_name: "Прокатка",
        brand: "ПО-59, Л63",
        diameter_thickness: "0.5-15mm",
        price_per_kg: "уточните",
      },
      {
        item_name: "Пруток шестигранный",
        brand: "ПО-59, Л63",
        diameter_thickness: "6-100mm",
        price_per_kg: "уточните",
      },
      {
        item_name: "Труба круглая",
        brand: "ПО-59, Л63",
        diameter_thickness: "6-130mm",
        price_per_kg: "уточните",
      },
    ],
  },
  {
    id: 7,
    type: "Припой",
    card_image: "images/solder-details.png",
    detail_image: "images/solder-details.png",
    items: [
      {
        item_name: "Пруток",
        brand: "ПОС-30, ПОС-61, ПОСК",
        diameter_thickness: "Чушка, пруток, проволока",
        price_per_kg: "уточните",
      },
      {
        item_name: "Свинец литой",
        brand: "С1, С0Ч2",
        diameter_thickness: "Плоская",
        price_per_kg: "уточните",
      },
      {
        item_name: "Баббит",
        brand: "В1, В83",
        diameter_thickness: "Чушка",
        price_per_kg: "уточните",
      },
    ],
  },
];

export const reviews = [
  {
    id: 1,
    name: "Евгений Садков",
    position: "Программа – Экспресс Рассрочка",
    image: "images/Evgeniy-img.png",
  },
  {
    id: 2,
    name: "Анастасия Майер",
    position: "Инвестиции – Вклад Активный",
    image: "images/Anastasia-img.png",
  },
  {
    id: 3,
    name: "Фанзиль Гарипов",
    position: "Программа – Авто Рассрочка",
    image: "images/Faniel-img.png",
  },
  {
    id: 4,
    name: "Фанзиль Гарипов",
    position: "Программа – Авто Рассрочка",
    image: "images/Faniel-img.png",
  },
];
