const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

function clockTick() {
    const date = new Date();
    const seconds = date.getSeconds(); // Saniyeleri alın
    const minutes = date.getMinutes(); // Dakikaları alın
    const hours = date.getHours();    // Saatleri alın

    // Döndürme hesaplamaları
    const secondRotation = (seconds / 60) * 360; // Saniye başına 360 derece
    const minuteRotation = ((minutes + seconds / 60) / 60) * 360; // Dakika başına 360 derece + saniye katkısı
    const hourRotation = ((hours % 12 + minutes / 60) / 12) * 360; // 12 saatlik döngü + dakika katkısı

    // Döndürme işlemi
    rotateClockHand(secondHand, secondRotation);
    rotateClockHand(minuteHand, minuteRotation);
    rotateClockHand(hourHand, hourRotation);
}

function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation); // 360 dereceye çevir
}

// Her 1 saniyede bir clockTick çağrılıyor
setInterval(clockTick, 1000);

// İlk çalıştırma (interval başlamadan önce saati güncelleyin)
clockTick();
