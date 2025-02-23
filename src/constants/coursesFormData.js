export const coursesFormData = [
  {
    id: 1,
    label: "نام دوره",
    name: "name",
    type: "text",
    placeHolder: "نام دوره مورد نظر",
  },
  {
    id: 2,
    label: "مدت زمان دوره",
    name: "timeLength",
    type: "text",
    placeHolder: "مدت زمان دوره مورد",
  },
  {
    id: 3,
    label: "وضعیت دوره",
    name: "status",
    type: "select",
    items: [
      {
        id: 1,
        label: "در حال برگزاری",
      },
      {
        id: 2,
        label: "اتمام شده",
      },
    ],
  },
  {
    id: 4,
    label: "قیمت دوره",
    name: "price",
    type: "text",
    placeHolder: "قیمت دوره",
  },
  {
    id: 5,
    label: "تخفیف دوره",
    name: "discount",
    type: "number",
    placeHolder: "تخفیف دوره",
  },
];
