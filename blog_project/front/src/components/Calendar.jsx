import { useState } from "react"
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"

const HeaderWrapper = styled.div`
    padding: 1rem;
`;
const HeaderCalendar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const DaysList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 1rem 2rem;
`;
const SevenGridCols = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: .5rem;
    margin: 0 2rem;
`;
const Days = styled.li`
    list-style: none;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: var(--background);
    color: var(--text);
    cursor: pointer;
    display: grid;
    place-content: center;
`;

const persianDays = ["شنبه", "يكشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"];
const persianMonth = ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دي", "بهمن", "اسفند"];

const Calendar = () => {
    const dateFormatter = (date, option) => {
        return Intl.DateTimeFormat('fa-IR', option).format(date);
    };
    const faToEn = (date) => {
        const faDigit = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
        faDigit.forEach((item, index) => {
            date.day = date.day.replaceAll(item, index);
            date.month = date.month.replaceAll(item, index);
            date.year = date.year.replaceAll(item, index);
        })
        return date;
    };
    const jalaliDateMaker = (date) => {
        return {
            day: dateFormatter(date, {
                day: '2-digit'
            }),
            month: dateFormatter(date, {
                month: 'numeric'
            }),
            monthTitle: dateFormatter(date, {
                month: 'long'
            }),
            year: dateFormatter(date, {
                year: 'numeric'
            }),
            weekDay: dateFormatter(date, {
                weekday: 'long'
            })
        }
    };
    const [currentPersinaDate, setCurrentPersianDate] = useState(faToEn(jalaliDateMaker(new Date())));
    const month = Number(currentPersinaDate.month);
    const year = Number(currentPersinaDate.year);
    const range = () => {
        let days;
        if (month <= 6)
            days = 31;
        else if (month >= 7 && month <= 11)
            days = 30;
        else
            days = 29;
        console.log(month)
        return Array(days).fill(0);
    };

    const nextMonth = () => {
        if (month <= 11)
            setCurrentPersianDate(prev => ({ ...prev, month: month + 1, monthTitle: persianMonth[month] }))
        else
            setCurrentPersianDate(prev => ({ ...prev, month: 1, monthTitle: persianMonth[0], year: year + 1 }))
    }
    const prevMonth = () => {
        if (month > 1)
            setCurrentPersianDate(prev => ({ ...prev, month: month - 1, monthTitle: persianMonth[month - 2] }))
        else
            setCurrentPersianDate(prev => ({ ...prev, month: 12, monthTitle: persianMonth[11], year: year - 1 }))
        console.log(month)
    }
    return (
        <>
            <HeaderWrapper>
                <HeaderCalendar>
                    <IoIosArrowForward onClick={nextMonth} />
                    {currentPersinaDate.year} {currentPersinaDate.monthTitle}
                    <IoIosArrowBack onClick={prevMonth} />
                </HeaderCalendar>
                <DaysList>
                    {persianDays.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </DaysList>
            </HeaderWrapper>
            <SevenGridCols>
                {range().map((item, index) => (
                    <Days key={index}>{index + 1}</Days>
                ))}
            </SevenGridCols>
        </>
    )
}

export default Calendar