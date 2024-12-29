# Analog Saat

Bu proje, **HTML**, **CSS** ve **JavaScript** kullanılarak geliştirilmiş basit bir **Analog Saat** uygulamasıdır. Saat, saat, dakika ve saniye göstergeleriyle birlikte gerçek zamanı dinamik olarak günceller.

## Özellikler

- Saat, dakika ve saniye göstergelerini içeren analog saat.
- JavaScript ile her saniye dinamik olarak güncellenir.
- CSS ile tamamen responsive (duyarlı) tasarım.
- Basit ve temiz bir tasarım, kolayca özelleştirilebilir.

---

## Kullanım

1. Bu projeyi bilgisayarınıza klonlayın veya indirin.

2. `index.html` dosyasını herhangi bir modern web tarayıcısında açın.

3. Analog saat otomatik olarak mevcut saati gösterecek ve her saniye güncellenecektir.

---

## Nasıl Çalışır?

1. **Saat Kollarının Hareketi**:
   - `app.js` dosyası, JavaScript’in `Date` nesnesini kullanarak mevcut zamanı alır.
   - Saniye, dakika ve saat değerleri tam bir dairenin (360 derece) kesirleri olarak hesaplanır.
   - Kollar, CSS özel özellikleri (`--rotate`) ve `transform` stilleri kullanılarak döndürülür.

2. **Dinamik Güncellemeler**:
   - JavaScript’teki `setInterval` fonksiyonu sayesinde saat her saniyede bir güncellenir.

---

## Kullanılan Teknolojiler

- **HTML**: Saatin yapısını oluşturmak için.
- **CSS**: Tasarım ve düzen için.
- **JavaScript**: Saati dinamik olarak güncellemek için.
