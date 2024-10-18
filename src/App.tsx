import { DataGrid } from "./components/data-grid";
import { CellProps, Column, Row } from "./components/data-grid/types";

function TextCell(props: CellProps) {
  return <p style={{ margin: 0 }}>{props.row[props.column.field]}</p>;
}

function ImageCell(props: CellProps) {
  return (
    <img
      src={props.row[props.column.field]}
      style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.25rem" }}
    />
  );
}

const columns: Column[] = [
  { field: "id", label: "شناسه", cell: TextCell, width: 1 },
  { field: "image", label: "تصویر", cell: ImageCell, width: 1 },
  { field: "firstname", label: "نام", cell: TextCell },
  { field: "lastname", label: "نام خانوادگی", cell: TextCell },
  { field: "phone", label: "تلفن", cell: TextCell },
];

const rows: Row[] = [
  {
    id: "1",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    firstname: "علی",
    lastname: "احمدی",
    phone: "09123456789",
  },
  {
    id: "2",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    firstname: "سارا",
    lastname: "حسینی",
    phone: "09351234567",
  },
  {
    id: "3",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    firstname: "رضا",
    lastname: "مرادی",
    phone: "09187654321",
  },
  {
    id: "4",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    firstname: "مینا",
    lastname: "کاویانی",
    phone: "09124567890",
  },
  {
    id: "5",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    firstname: "نیما",
    lastname: "رستمی",
    phone: "09214567890",
  },
  {
    id: "6",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    firstname: "کیان",
    lastname: "رحیمی",
    phone: "09334567891",
  },
  {
    id: "7",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    firstname: "لیلا",
    lastname: "ابراهیمی",
    phone: "09127891234",
  },
  {
    id: "8",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    firstname: "حسن",
    lastname: "نوری",
    phone: "09134567812",
  },
  {
    id: "9",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    firstname: "زهرا",
    lastname: "سلیمی",
    phone: "09124567856",
  },
  {
    id: "10",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    firstname: "پویا",
    lastname: "طاهری",
    phone: "09134567123",
  },
  {
    id: "11",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    firstname: "رها",
    lastname: "جعفری",
    phone: "09214567123",
  },
  {
    id: "12",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    firstname: "سعید",
    lastname: "غفاری",
    phone: "09334567812",
  },
  {
    id: "13",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    firstname: "شیرین",
    lastname: "کاظمی",
    phone: "09134567898",
  },
  {
    id: "14",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    firstname: "فرهاد",
    lastname: "سلیمانی",
    phone: "09187654322",
  },
  {
    id: "15",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    firstname: "نازنین",
    lastname: "زمانی",
    phone: "09351237891",
  },
];

export default function App() {
  return <DataGrid columns={columns} rows={rows} />;
}
