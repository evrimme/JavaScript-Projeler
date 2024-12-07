document.addEventListener('DOMContentLoaded', function () {
    const birth_day = document.getElementById("day");
    const birth_month = document.getElementById("month");
    const birth_year = document.getElementById("year");
    const button = document.getElementById("button");
    const text = document.getElementById("text");

    let date = new Date();
    let current_day = date.getDate();
    let current_month = date.getMonth() + 1; // JavaScript'te aylar 0'dan başlar
    let current_year = date.getFullYear();

    let entered_day;
    let entered_month;
    let entered_year;
    let result_year;
    let result_day;
    let result_month;
    button.addEventListener("click", function () {
       
        entered_day = parseInt(birth_day.value);
        entered_month = parseInt(birth_month.value);
        entered_year = parseInt(birth_year.value);

        // Geçerli bir doğum tarihi girmediyseniz, hata mesajı gösterilir
        if (isNaN(entered_day) || isNaN(entered_month) || isNaN(entered_year) || entered_day <= 0 || entered_month <= 0 || entered_year <= 0
             || (entered_day <= 0 && entered_month <= 0 && entered_year <= 0) || entered_day>30 || entered_month>12 || entered_year>current_year)  {
            text.textContent = "Geçerli bir değer giriniz";
            return;
        }
        // Yaş hesaplaması
        result_year = current_year - entered_year;
        result_day= current_day - entered_day;
        result_month= current_month - entered_month;
        
        if(result_day<0)
        {
            const days_in_previous_month= new Date(current_year,current_month-1,0).getDate();
            result_day=result_day+days_in_previous_month;
            result_month--;
        }
        if(result_month<0)
        {
            result_month=result_month+12;
            result_year--;
        }           
        text.textContent =result_year+" yıl "+result_month+" ay "+result_day+" gün "+" yaşadınız ";
    });
});
