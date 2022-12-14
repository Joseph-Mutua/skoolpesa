import React, { useState } from "react";


import { DataGrid } from "@mui/x-data-grid";
import { Menu, MenuItem, IconButton } from "@mui/material";

import { Box, Typography } from "@mui/material";


import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";



export function SortedDescendingIcon() {
  return <ArrowDropDownIcon className="icon" />;
}

export function SortedAscendingIcon() {
  return <ArrowDropUpIcon className="icon" />;
}

const actions = ["View", "Send Reminder", "Print"];




const InvoicesTable = () => {

  const [anchorElNav, setAnchorElNav] = useState(null);
 

  const handleOpenMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };

    const columns = [
      { field: "number", headerName: "Number", width: 200 },
      { field: "studentID", headerName: "Student ID", width: 200 },

      {
        field: "invoiceRecipient",
        headerName: "Invoice Recipient",
        width: 250,
      },
      {
        field: "dueDate",
        headerName: "Due Date",
        width: 200,
      },
      {
        field: "dueDays",
        headerName: "Due Days",
        width: 150,
      },
      {
        field: "balanceDue",
        headerName: "Balance Due",
        width: 150,
      },
      {
        field: "description",
        headerName: "Description",
        width: 200,
      },

      {
        field: "actions",
        headerName: "Actions",
        width: 100,
        renderCell: (params) => {
          // console.log(params);
          return (
            <IconButton>
              <MoreVertIcon onClick={handleOpenMenu} />
            </IconButton>
          );
        },
      },
    ];


    //   {
    //     id: 1,
    //     studentName: "Julius Malema",
    //     studentID: "1334576589",
    //     dateOfAdmission: "25 Dec, 2020",
    //     gender: "Male",
    //     dateOfBirth: "23 Nov, 2005",
    //     motherName: "Amanda Hoff",
    //     motherContact: "amandaHoff@gmail.com",
    //   },
    //   {
    //     id: 1,
    //     studentName: "Winston Churchil",
    //     studentID: "2344997865",
    //     dateOfAdmission: "17 May, 2021",
    //     gender: "Male",
    //     dateOfBirth: "23 Nov, 2005",
    //     motherName: "Sarah Tongi",
    //     motherContact: "sarahTongi@gmail.com",
    //   },
    //   {
    //     id: 11,
    //     studentName: "Kelvin Ombati",
    //     studentID: "8759425091",
    //     dateOfAdmission: "15 March, 2018",
    //     gender: "Male",
    //     dateOfBirth: "11 Feb, 2002",
    //     motherName: "Gloria Ombatio",
    //     motherContact: "gloriaOmbati@gmail.com",
    //   },
    //   {
    //     id: 12,
    //     studentName: "Wambui Macharia",
    //     studentID: "9043567812",
    //     dateOfAdmission: "28 June, 2022",
    //     gender: "Female",
    //     dateOfBirth: "23 July, 2003",
    //     motherName: "Everlyn Macharia",
    //     motherContact: "everlynmacharia@gmail.com",
    //   },
    //   {
    //     id: 1,
    //     studentName: "Mercie Kimani",
    //     studentID: "45328975783",
    //     dateOfAdmission: "19 July, 2018",
    //     gender: "Female",
    //     dateOfBirth: "23 March, 2003",
    //     motherName: "Gladys Kimani",
    //     motherContact: "gladysKimani@gmail.com",
    //   },
    //   {
    //     id: 13,
    //     studentName: "Kelvin Ombati",
    //     studentID: "8759425091",
    //     dateOfAdmission: "14 April, 2022",
    //     gender: "Male",
    //     dateOfBirth: "11 Feb, 1999",
    //     motherName: "Gloria Ombatio",
    //     motherContact: "gloriaOmbati@gmail.com",
    //   },
    //   {
    //     id: 14,
    //     studentName: "Wambui Macharia",
    //     studentID: "9043567812",
    //     dateOfAdmission: "28 June, 2022",
    //     gender: "Female",
    //     dateOfBirth: "23 July, 2005",
    //     motherName: "Everlyn Macharia",
    //     motherContact: "everlynmacharia@gmail.com",
    //   },
    //   {
    //     id: 15,
    //     studentName: "Mercie Kimani",
    //     studentID: "45328975783",
    //     dateOfAdmission: "19 July, 2018",
    //     gender: "Female",
    //     dateOfBirth: "23 March, 2003",
    //     motherName: "Gladys Kimani",
    //     motherContact: "gladysKimani@gmail.com",
    //   },
    //   {
    //     id: 16,
    //     studentName: "Julius Malema",
    //     studentID: "1334576589",
    //     dateOfAdmission: "22 March, 2019",
    //     gender: "Male",
    //     dateOfBirth: "27 Nov, 2001",
    //     motherName: "Amanda Hoff",
    //     motherContact: "amandaHoff@gmail.com",
    //   },
    //   {
    //     id: 17,
    //     studentName: "Winston Churchil",
    //     studentID: "2344997865",
    //     dateOfAdmission: "17 May, 2020",
    //     gender: "Male",
    //     dateOfBirth: "17 Nov, 2000",
    //     motherName: "Sarah Tongi",
    //     motherContact: "sarahTongi@gmail.com",
    //   },
    //   {
    //     id: 18,
    //     studentName: "Kelvin Ombati",
    //     studentID: "8759425091",
    //     dateOfAdmission: "14 Aug, 2022",
    //     gender: "Male",
    //     dateOfBirth: "11/02/1999",
    //     motherName: "Gloria Ombatio",
    //     motherContact: "gloriaOmbati@gmail.com",
    //   },
    //   {
    //     id: 19,
    //     studentName: "Wambui Macharia",
    //     studentID: "9043567812",
    //     dateOfAdmission: "28 June, 2022",
    //     gender: "Female",
    //     dateOfBirth: "23 July, 2005",
    //     motherName: "Everlyn Macharia",
    //     motherContact: "everlynmacharia@gmail.com",
    //   },
    //   {
    //     id: 21,
    //     studentName: "Mercie Kimani",
    //     studentID: "45328975783",
    //     dateOfAdmission: "19 July, 2018",
    //     gender: "Female",
    //     dateOfBirth: "23 March, 2003",
    //     motherName: "Gladys Kimani",
    //     motherContact: "gladysKimani@gmail.com",
    //   },
    //   {
    //     id: 221,
    //     studentName: "Kelvin Ombati",
    //     studentID: "8759425091",
    //     dateOfAdmission: "14 Aug, 2022",
    //     gender: "Male",
    //     dateOfBirth: "11 Feb, 1999",
    //     motherName: "Gloria Ombatio",
    //     motherContact: "gloriaOmbati@gmail.com",
    //   },
    //   {
    //     id: 331,
    //     studentName: "Wambui Macharia",
    //     studentID: "9043567812",
    //     dateOfAdmission: "28 June, 2022",
    //     gender: "Female",
    //     dateOfBirth: "23 July, 2005",
    //     motherName: "Everlyn Macharia",
    //     motherContact: "everlynmacharia@gmail.com",
    //   },
    //   {
    //     id: 133,
    //     studentName: "Mercie Kimani",
    //     studentID: "45328975783",
    //     dateOfAdmission: "19 July, 2018",
    //     gender: "Female",
    //     dateOfBirth: "23 March, 2003",
    //     motherName: "Gladys Kimani",
    //     motherContact: "gladysKimani@gmail.com",
    //   },
    //   {
    //     id: 144,
    //     studentName: "Winston Churchil",
    //     studentID: "2344997865",
    //     dateOfAdmission: "17 May, 2020",
    //     gender: "Male",
    //     dateOfBirth: "17 Dec, 2000",
    //     motherName: "Sarah Tongi",
    //     motherContact: "sarahTongi@gmail.com",
    //   },
    //   {
    //     id: 155,
    //     studentName: "Kelvin Ombati",
    //     studentID: "8759425091",
    //     dateOfAdmission: "14 Aug, 2022",
    //     gender: "Male",
    //     dateOfBirth: "11 FEb, 1999",
    //     motherName: "Gloria Ombatio",
    //     motherContact: "gloriaOmbati@gmail.com",
    //   },
    //   {
    //     id: 166,
    //     studentName: "Wambui Macharia",
    //     studentID: "9043567812",
    //     dateOfAdmission: "28 June, 2022",
    //     gender: "Female",
    //     dateOfBirth: "23 Dec, 2005",
    //     motherName: "Everlyn Macharia",
    //     motherContact: "everlynmacharia@gmail.com",
    //   },
    //   {
    //     id: 177,
    //     studentName: "Mercie Kimani",
    //     studentID: "45328975783",
    //     dateOfAdmission: "19 July, 2018",
    //     gender: "Female",
    //     dateOfBirth: "23 Sep, 2003",
    //     motherName: "Gladys Kimani",
    //     motherContact: "gladysKimani@gmail.com",
    //   },
    //   {
    //     id: 188,
    //     studentName: "Kelvin Ombati",
    //     studentID: "8759425091",
    //     dateOfAdmission: "14 Aug, 2022",
    //     gender: "Male",
    //     dateOfBirth: "11/02/1999",
    //     motherName: "Gloria Ombatio",
    //     motherContact: "gloriaOmbati@gmail.com",
    //   },
    //   {
    //     id: 199,
    //     studentName: "Wambui Macharia",
    //     studentID: "9043567812",
    //     dateOfAdmission: "28 Jan, 2022",
    //     gender: "Female",
    //     dateOfBirth: "23 Sep, 2005",
    //     motherName: "Everlyn Macharia",
    //     motherContact: "everlynmacharia@gmail.com",
    //   },
    //   {
    //     id: 1111,
    //     studentName: "Winston Churchil",
    //     studentID: "2344997865",
    //     dateOfAdmission: "17 Feb, 2020",
    //     gender: "Male",
    //     dateOfBirth: "17 Oct, 2000",
    //     motherName: "Sarah Tongi",
    //     motherContact: "sarahTongi@gmail.com",
    //   },
    //   {
    //     id: 1222,
    //     studentName: "Kelvin Ombati",
    //     studentID: "8759425091",
    //     dateOfAdmission: "21 May, 2022",
    //     gender: "Male",
    //     dateOfBirth: "11 Feb, 1999",
    //     motherName: "Gloria Ombatio",
    //     motherContact: "gloriaOmbati@gmail.com",
    //   },
    //   {
    //     id: 1333,
    //     studentName: "Wambui Macharia",
    //     studentID: "9043567812",
    //     dateOfAdmission: "28 June, 2022",
    //     gender: "Female",
    //     dateOfBirth: "23 July, 2005",
    //     motherName: "Everlyn Macharia",
    //     motherContact: "everlynmacharia@gmail.com",
    //   },
    //   {
    //     id: 1444,
    //     studentName: "Mercie Kimani",
    //     studentID: "45328975783",
    //     dateOfAdmission: "19/07/2018",
    //     gender: "Female",
    //     dateOfBirth: "23 March, 2003",
    //     motherName: "Gladys Kimani",
    //     motherContact: "gladysKimani@gmail.com",
    //   },
    //   {
    //     id: 1555,
    //     studentName: "Kelvin Ombati",
    //     studentID: "8759425091",
    //     dateOfAdmission: "14 Sep, 2022",
    //     gender: "Male",
    //     dateOfBirth: "21 Aug, 1999",
    //     motherName: "Gloria Ombatio",
    //     motherContact: "gloriaOmbati@gmail.com",
    //   },
    //   {
    //     id: 1666,
    //     studentName: "Wambui Macharia",
    //     studentID: "9043567812",
    //     dateOfAdmission: "28 July, 2022",
    //     gender: "Female",
    //     dateOfBirth: "23 Nov, 2005",
    //     motherName: "Everlyn Macharia",
    //     motherContact: "everlynmacharia@gmail.com",
    //   },
    //   {
    //     id: 1777,
    //     studentName: "Winston Churchil",
    //     studentID: "2344997865",
    //     dateOfAdmission: "11 Jan, 2020",
    //     gender: "Male",
    //     dateOfBirth: "17 Oct, 2000",
    //     motherName: "Sarah Tongi",
    //     motherContact: "sarahTongi@gmail.com",
    //   },
    //   {
    //     id: 1888,
    //     studentName: "Kelvin Ombati",
    //     studentID: "8759425091",
    //     dateOfAdmission: "14 March, 2022",
    //     gender: "Male",
    //     dateOfBirth: "11 April, 1999",
    //     motherName: "Gloria Ombatio",
    //     motherContact: "gloriaOmbati@gmail.com",
    //   },
    //   {
    //     id: 1999,
    //     studentName: "Wambui Macharia",
    //     studentID: "9043567812",
    //     dateOfAdmission: "28 March, 2022",
    //     gender: "Female",
    //     dateOfBirth: "23 Sep, 2004",
    //     motherName: "Everlyn Macharia",
    //     motherContact: "everlynmacharia@gmail.com",
    //   },
    //   {
    //     id: 11111,
    //     studentName: "Mercie Kimani",
    //     studentID: "45328975783",
    //     dateOfAdmission: "19 Oct, 2018",
    //     gender: "Female",
    //     dateOfBirth: "23 Dec, 2003",
    //     motherName: "Gladys Kimani",
    //     motherContact: "gladysKimani@gmail.com",
    //   },
    //   {
    //     id: 12222,
    //     studentName: "Kelvin Ombati",
    //     studentID: "8759425091",
    //     dateOfAdmission: "14 May, 2022",
    //     gender: "Male",
    //     dateOfBirth: "11 Feb, 1999",
    //     motherName: "Gloria Ombatio",
    //     motherContact: "gloriaOmbati@gmail.com",
    //   },
    //   {
    //     id: 13333,
    //     studentName: "Wambui Macharia",
    //     studentID: "9043567812",
    //     dateOfAdmission: "28 Jan, 2022",
    //     gender: "Female",
    //     dateOfBirth: "23 June, 2005",
    //     motherName: "Everlyn Macharia",
    //     motherContact: "everlynmacharia@gmail.com",
    //   },
    //   {
    //     id: 14444,
    //     studentName: "Winston Churchil",
    //     studentID: "2344997865",
    //     dateOfAdmission: "17 April, 2020",
    //     gender: "Male",
    //     dateOfBirth: "17 Aug, 2000",
    //     motherName: "Sarah Tongi",
    //     motherContact: "sarahTongi@gmail.com",
    //   },
    //   {
    //     id: 15555,
    //     studentName: "Kelvin Ombati",
    //     studentID: "8759425091",
    //     dateOfAdmission: "14 Dec, 2022",
    //     gender: "Male",
    //     dateOfBirth: "11 Dec, 1999",
    //     motherName: "Gloria Ombatio",
    //     motherContact: "gloriaOmbati@gmail.com",
    //   },
    //   {
    //     id: 16666,
    //     studentName: "Wambui Macharia",
    //     studentID: "9043567812",
    //     dateOfAdmission: "28 Sep, 2022",
    //     gender: "Female",
    //     dateOfBirth: "23 Aug, 2005",
    //     motherName: "Everlyn Macharia",
    //     motherContact: "everlynmacharia@gmail.com",
    //   },
    //   {
    //     id: 1777,
    //     studentName: "Mercie Kimani",
    //     studentID: "45328975783",
    //     dateOfAdmission: "19 June, 2018",
    //     gender: "Female",
    //     dateOfBirth: "23 March, 2003",
    //     motherName: "Gladys Kimani",
    //     motherContact: "gladysKimani@gmail.com",
    //   },
    //   {
    //     id: 18888,
    //     studentName: "Kelvin Ombati",
    //     studentID: "8759425091",
    //     dateOfAdmission: "14 July, 2022",
    //     gender: "Male",
    //     dateOfBirth: "11 Dec, 1999",
    //     motherName: "Gloria Ombatio",
    //     motherContact: "gloriaOmbati@gmail.com",
    //   },
    //   {
    //     id: 19999,
    //     studentName: "Wambui Macharia",
    //     studentID: "9043567812",
    //     dateOfAdmission: "28 July, 2022",
    //     gender: "Female",
    //     dateOfBirth: "23/07/2005",
    //     motherName: "Everlyn Macharia",
    //     motherContact: "everlynmacharia@gmail.com",
    //   },
    //   {
    //     id: 100000,
    //     studentName: "Winston Churchil",
    //     studentID: "2344997865",
    //     dateOfAdmission: "17 Jan, 2020",
    //     gender: "Male",
    //     dateOfBirth: "21 Dec, 2000",
    //     motherName: "Sarah Tongi",
    //     motherContact: "sarahTongi@gmail.com",
    //   },
    //   {
    //     id: 123432,
    //     studentName: "Kelvin Ombati",
    //     studentID: "8759425091",
    //     dateOfAdmission: "14 July, 2022",
    //     gender: "Male",
    //     dateOfBirth: "11 Feb, 1999",
    //     motherName: "Gloria Ombatio",
    //     motherContact: "gloriaOmbati@gmail.com",
    //   },
    //   {
    //     id: 134543,
    //     studentName: "Wambui Macharia",
    //     studentID: "9043567812",
    //     dateOfAdmission: "28 June, 2022",
    //     gender: "Female",
    //     dateOfBirth: "23 July, 2005",
    //     motherName: "Everlyn Macharia",
    //     motherContact: "everlynmacharia@gmail.com",
    //   },
    //   {
    //     id: 145654,
    //     studentName: "Mercie Kimani",
    //     studentID: "45328975783",
    //     dateOfAdmission: "19 July, 2018",
    //     gender: "Female",
    //     dateOfBirth: "23 Nov, 2005",
    //     motherName: "Gladys Kimani",
    //     motherContact: "gladysKimani@gmail.com",
    //   },
    //   {
    //     id: 156765,
    //     studentName: "Kelvin Ombati",
    //     studentID: "8759425091",
    //     dateOfAdmission: "25 Dec, 2022",
    //     gender: "Male",
    //     dateOfBirth: "23 Nov, 2005",
    //     motherName: "Gloria Ombatio",
    //     motherContact: "gloriaOmbati@gmail.com",
    //   },
    //   {
    //     id: 167876,
    //     studentName: "Wambui Macharia",
    //     studentID: "9043567812",
    //     dateOfAdmission: "25 Dec, 2022",
    //     gender: "Female",
    //     dateOfBirth: "23 Nov, 2005",
    //     motherName: "Everlyn Macharia",
    //     motherContact: "everlynmacharia@gmail.com",
    //   },
    // ];

const rows = [
  {
    id: 1,
    number: "07-911-7379",
    studentID: "85-592-7705",
    invoiceRecipient: "Olenka Kroon",
    dueDate: "14/11/2021",
    dueDays: 1,
    balanceDue: "$8.27",
    description: "9W-x5Po-3Zb6",
  },
  {
    id: 2,
    number: "27-026-3829",
    studentID: "54-711-2041",
    invoiceRecipient: "Garland Coult",
    dueDate: "19/01/2022",
    dueDays: 2,
    balanceDue: "$4.33",
    description: "61-kcko-5Xwu",
  },
  {
    id: 3,
    number: "24-944-1099",
    studentID: "01-125-1474",
    invoiceRecipient: "Angelina Greener",
    dueDate: "26/03/2022",
    dueDays: 3,
    balanceDue: "$4.06",
    description: "5E-L91R-HjLr",
  },
  {
    id: 4,
    number: "82-131-6270",
    studentID: "96-533-2540",
    invoiceRecipient: "Winnifred Marsh",
    dueDate: "03/10/2021",
    dueDays: 4,
    balanceDue: "$8.74",
    description: "2G-PiDR-oHCW",
  },
  {
    id: 5,
    number: "15-090-9576",
    studentID: "77-417-6041",
    invoiceRecipient: "Deborah Niesegen",
    dueDate: "27/12/2021",
    dueDays: 5,
    balanceDue: "$6.33",
    description: "3D-2BYk-J5uS",
  },
  {
    id: 6,
    number: "37-919-7104",
    studentID: "67-631-7229",
    invoiceRecipient: "Devin McCrorie",
    dueDate: "22/08/2022",
    dueDays: 6,
    balanceDue: "$7.87",
    description: "1Q-YSbp-Dvvw",
  },
  {
    id: 7,
    number: "66-634-9740",
    studentID: "04-911-9489",
    invoiceRecipient: "Teddy Martino",
    dueDate: "06/11/2021",
    dueDays: 7,
    balanceDue: "$4.50",
    description: "0y-5ab5-a3Nn",
  },
  {
    id: 8,
    number: "96-943-8417",
    studentID: "70-088-6090",
    invoiceRecipient: "Hendrika Beadnall",
    dueDate: "22/01/2022",
    dueDays: 8,
    balanceDue: "$3.84",
    description: "57-A5jP-tqi9",
  },
  {
    id: 9,
    number: "19-495-4445",
    studentID: "91-876-4477",
    invoiceRecipient: "Libbi Briars",
    dueDate: "26/07/2022",
    dueDays: 9,
    balanceDue: "$6.56",
    description: "6o-oatH-0oU0",
  },
  {
    id: 10,
    number: "92-252-3726",
    studentID: "39-438-2367",
    invoiceRecipient: "Yolane Millott",
    dueDate: "30/11/2021",
    dueDays: 10,
    balanceDue: "$3.33",
    description: "46-eWNe-yY3u",
  },
  {
    id: 11,
    number: "61-694-2373",
    studentID: "27-255-4368",
    invoiceRecipient: "Falito Colombier",
    dueDate: "12/09/2021",
    dueDays: 11,
    balanceDue: "$1.17",
    description: "5y-TR7o-P0HW",
  },
  {
    id: 12,
    number: "82-227-2917",
    studentID: "03-376-9224",
    invoiceRecipient: "Delly Zecchini",
    dueDate: "14/06/2022",
    dueDays: 12,
    balanceDue: "$3.40",
    description: "2f-kLxo-gr3f",
  },
  {
    id: 13,
    number: "69-864-4388",
    studentID: "14-965-2993",
    invoiceRecipient: "Bernardo Arnao",
    dueDate: "20/10/2021",
    dueDays: 13,
    balanceDue: "$2.19",
    description: "2O-2BX8-Koma",
  },
  {
    id: 14,
    number: "33-938-5954",
    studentID: "74-479-7769",
    invoiceRecipient: "Dolph Franzetti",
    dueDate: "21/12/2021",
    dueDays: 14,
    balanceDue: "$9.26",
    description: "3o-iCgC-j1Bh",
  },
  {
    id: 15,
    number: "61-685-3176",
    studentID: "75-258-6429",
    invoiceRecipient: "Gino Forsdike",
    dueDate: "01/07/2022",
    dueDays: 15,
    balanceDue: "$5.68",
    description: "5J-MTHd-gINq",
  },
  {
    id: 16,
    number: "02-988-8118",
    studentID: "96-548-5270",
    invoiceRecipient: "Arline McIlmurray",
    dueDate: "21/11/2021",
    dueDays: 16,
    balanceDue: "$2.99",
    description: "9F-hksG-appV",
  },
  {
    id: 17,
    number: "12-035-5669",
    studentID: "89-487-0516",
    invoiceRecipient: "Felix L'Hommee",
    dueDate: "27/02/2022",
    dueDays: 17,
    balanceDue: "$7.85",
    description: "0r-nFWF-wagY",
  },
  {
    id: 18,
    number: "77-836-1995",
    studentID: "41-849-3478",
    invoiceRecipient: "Dorene Cristofano",
    dueDate: "06/10/2021",
    dueDays: 18,
    balanceDue: "$1.30",
    description: "4L-ZLWb-HOIr",
  },
  {
    id: 19,
    number: "88-039-5854",
    studentID: "09-899-7693",
    invoiceRecipient: "Wilow Nuttall",
    dueDate: "08/03/2022",
    dueDays: 19,
    balanceDue: "$0.26",
    description: "98-EA9x-liLU",
  },
  {
    id: 20,
    number: "86-291-7645",
    studentID: "47-134-5696",
    invoiceRecipient: "Godard Loades",
    dueDate: "13/02/2022",
    dueDays: 20,
    balanceDue: "$6.84",
    description: "1d-ufuU-gtId",
  },
  {
    id: 21,
    number: "54-696-8769",
    studentID: "63-118-7787",
    invoiceRecipient: "Barbee McCulloch",
    dueDate: "27/07/2022",
    dueDays: 21,
    balanceDue: "$7.07",
    description: "2s-TnHA-kFTG",
  },
  {
    id: 22,
    number: "92-808-3292",
    studentID: "95-508-1795",
    invoiceRecipient: "Teri Phethean",
    dueDate: "14/11/2021",
    dueDays: 22,
    balanceDue: "$2.47",
    description: "8w-XqHy-pv97",
  },
  {
    id: 23,
    number: "40-394-6906",
    studentID: "99-894-8586",
    invoiceRecipient: "Shaine Spellessy",
    dueDate: "04/04/2022",
    dueDays: 23,
    balanceDue: "$5.58",
    description: "2c-PAqJ-zcJC",
  },
  {
    id: 24,
    number: "94-959-2021",
    studentID: "73-903-9125",
    invoiceRecipient: "Eduardo Island",
    dueDate: "18/06/2022",
    dueDays: 24,
    balanceDue: "$0.69",
    description: "9M-vRzE-ZadL",
  },
  {
    id: 25,
    number: "11-738-0057",
    studentID: "90-251-3521",
    invoiceRecipient: "Zane Snar",
    dueDate: "18/07/2022",
    dueDays: 25,
    balanceDue: "$6.20",
    description: "9e-td7f-qf4X",
  },
  {
    id: 26,
    number: "19-362-9542",
    studentID: "92-861-9435",
    invoiceRecipient: "Conni Ganter",
    dueDate: "07/08/2022",
    dueDays: 26,
    balanceDue: "$1.54",
    description: "9T-i0UO-m0mY",
  },
  {
    id: 27,
    number: "01-345-0599",
    studentID: "22-408-3324",
    invoiceRecipient: "Ginger McCobb",
    dueDate: "20/11/2021",
    dueDays: 27,
    balanceDue: "$4.24",
    description: "5b-CVa7-quC2",
  },
  {
    id: 28,
    number: "98-411-4803",
    studentID: "66-984-9500",
    invoiceRecipient: "Cordy Brazur",
    dueDate: "16/08/2022",
    dueDays: 28,
    balanceDue: "$1.44",
    description: "7G-xRbl-AoYa",
  },
  {
    id: 29,
    number: "99-710-9378",
    studentID: "55-702-8328",
    invoiceRecipient: "Tilly Gredden",
    dueDate: "09/02/2022",
    dueDays: 29,
    balanceDue: "$2.26",
    description: "9j-NkvS-ppZv",
  },
  {
    id: 30,
    number: "92-786-8888",
    studentID: "42-840-3365",
    invoiceRecipient: "Jesus Boyan",
    dueDate: "01/10/2021",
    dueDays: 30,
    balanceDue: "$2.55",
    description: "8r-GbP9-IrNT",
  },
  {
    id: 31,
    number: "64-422-8998",
    studentID: "07-798-3693",
    invoiceRecipient: "Doug Keuntje",
    dueDate: "11/04/2022",
    dueDays: 31,
    balanceDue: "$9.01",
    description: "1o-Uscu-wjWH",
  },
  {
    id: 32,
    number: "48-497-0123",
    studentID: "18-849-4858",
    invoiceRecipient: "Augusta Crain",
    dueDate: "11/12/2021",
    dueDays: 32,
    balanceDue: "$8.47",
    description: "73-AFcC-Gxa6",
  },
  {
    id: 33,
    number: "50-420-6930",
    studentID: "87-896-4588",
    invoiceRecipient: "Sabine Doldon",
    dueDate: "17/06/2022",
    dueDays: 33,
    balanceDue: "$1.38",
    description: "26-anD7-aqi3",
  },
  {
    id: 34,
    number: "42-781-4432",
    studentID: "71-144-8853",
    invoiceRecipient: "Kinny Wanklyn",
    dueDate: "03/01/2022",
    dueDays: 34,
    balanceDue: "$3.80",
    description: "7U-u7Ax-AR3v",
  },
  {
    id: 35,
    number: "30-095-7892",
    studentID: "78-305-2019",
    invoiceRecipient: "Dani Sandcraft",
    dueDate: "23/02/2022",
    dueDays: 35,
    balanceDue: "$3.19",
    description: "6w-vnVk-Z7eS",
  },
  {
    id: 36,
    number: "08-798-5401",
    studentID: "68-140-7958",
    invoiceRecipient: "Papageno Bland",
    dueDate: "13/04/2022",
    dueDays: 36,
    balanceDue: "$0.11",
    description: "0I-EzAh-wbcX",
  },
  {
    id: 37,
    number: "08-502-0038",
    studentID: "39-580-1342",
    invoiceRecipient: "Chancey Lagen",
    dueDate: "18/08/2022",
    dueDays: 37,
    balanceDue: "$0.54",
    description: "5d-dkz7-XF0y",
  },
  {
    id: 38,
    number: "13-027-9295",
    studentID: "30-782-5501",
    invoiceRecipient: "Gregoire Giacoboni",
    dueDate: "10/03/2022",
    dueDays: 38,
    balanceDue: "$5.68",
    description: "4o-bMBB-QB1N",
  },
  {
    id: 39,
    number: "82-288-7006",
    studentID: "48-874-1190",
    invoiceRecipient: "Cookie Wittering",
    dueDate: "15/03/2022",
    dueDays: 39,
    balanceDue: "$1.65",
    description: "5o-AVMw-mAkl",
  },
  {
    id: 40,
    number: "56-376-9532",
    studentID: "67-304-2234",
    invoiceRecipient: "Zacharie Ayers",
    dueDate: "01/06/2022",
    dueDays: 40,
    balanceDue: "$9.88",
    description: "7X-ScNO-Rbfa",
  },
  {
    id: 41,
    number: "92-676-4544",
    studentID: "22-650-1987",
    invoiceRecipient: "Sherman Jansa",
    dueDate: "08/09/2021",
    dueDays: 41,
    balanceDue: "$1.08",
    description: "4o-63YB-Gw2j",
  },
  {
    id: 42,
    number: "32-742-2204",
    studentID: "23-710-4813",
    invoiceRecipient: "Jewelle Tremberth",
    dueDate: "06/11/2021",
    dueDays: 42,
    balanceDue: "$3.77",
    description: "6S-9Hl2-b4Kx",
  },
  {
    id: 43,
    number: "37-794-1117",
    studentID: "68-961-8514",
    invoiceRecipient: "Marcela McGillivrie",
    dueDate: "02/02/2022",
    dueDays: 43,
    balanceDue: "$3.08",
    description: "4l-lRyj-tO3W",
  },
  {
    id: 44,
    number: "36-455-9955",
    studentID: "81-051-7396",
    invoiceRecipient: "Chaddy Denisyev",
    dueDate: "09/05/2022",
    dueDays: 44,
    balanceDue: "$8.37",
    description: "57-RL9Q-7Af3",
  },
  {
    id: 45,
    number: "71-542-8372",
    studentID: "33-798-5352",
    invoiceRecipient: "Kerry Burchall",
    dueDate: "25/12/2021",
    dueDays: 45,
    balanceDue: "$4.77",
    description: "4T-jkiC-d0yK",
  },
  {
    id: 46,
    number: "49-292-6527",
    studentID: "65-973-8452",
    invoiceRecipient: "Mose Arens",
    dueDate: "14/08/2022",
    dueDays: 46,
    balanceDue: "$2.69",
    description: "75-JAXe-Gbum",
  },
  {
    id: 47,
    number: "18-998-4034",
    studentID: "93-167-1699",
    invoiceRecipient: "Leona Slaymaker",
    dueDate: "02/10/2021",
    dueDays: 47,
    balanceDue: "$7.78",
    description: "5m-XL3L-9N8h",
  },
  {
    id: 48,
    number: "85-518-7199",
    studentID: "44-775-9877",
    invoiceRecipient: "Rawley Tilt",
    dueDate: "10/10/2021",
    dueDays: 48,
    balanceDue: "$9.78",
    description: "2O-wiK6-n4TM",
  },
  {
    id: 49,
    number: "84-187-8180",
    studentID: "68-683-4759",
    invoiceRecipient: "Myrtice Crone",
    dueDate: "20/02/2022",
    dueDays: 49,
    balanceDue: "$8.34",
    description: "7I-s5FR-c2bk",
  },
  {
    id: 50,
    number: "95-003-7029",
    studentID: "10-700-6368",
    invoiceRecipient: "Helli Rutgers",
    dueDate: "02/08/2022",
    dueDays: 50,
    balanceDue: "$6.57",
    description: "72-aHmO-P0Dv",
  },
];


  return (
    <Box sx={{ mt: 5}}>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseMenu}
      >
        {actions.map((action) => (
          <MenuItem key={action} onClick={handleCloseMenu}>
            <Typography textAlign="center">{action}</Typography>
          </MenuItem>
        ))}
      </Menu>
      
        <Box sx={{ }}>
          <DataGrid
            autoHeight
            // autoPageSize
            // showLastButton={true}
            pageSize={15}
            GridLinesVisibility="None"
            rows={rows}
            columns={columns}
            // pagination
            rowsPerPageOptions={[5, 10, 15, 20]}
            components={{
              ColumnSortedDescendingIcon: SortedDescendingIcon,
              ColumnSortedAscendingIcon: SortedAscendingIcon,
            }}
          />
        </Box>
    
    </Box>
  );
};

export default InvoicesTable;
