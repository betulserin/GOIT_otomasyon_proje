Feature: User Story - 06 - Misafir Olarak Satın Alma Akışı

  Bir kullanıcı olarak,
  Siteye üyelik oluşturmadan misafir olarak ödeme adımlarına devam etmek istiyorum,
  Böylece kişisel verilerimi kaydetmeden siparişimi hızlıca tamamlayabilirim.

  Scenario: AC1 & AC2 - Giriş sayfasına yönlendirme ve misafir seçeneğinin doğrulanması
    Given kullanıcı ana sayfadan sepete bir ürün ekler
    When açılan popupta "Satın Al" butonuna tıkladığında
    Then kullanıcı "/siparis-uye-giris" sayfasına yönlendirilmelidir
    And "Üye Olmadan Devam Et" butonu görünür olmalıdır

  Scenario: AC3 & AC4 - Misafir adres formuna geçiş ve alanların doğrulanması
    Given kullanıcı "/siparis-uye-giris" sayfasındadır
    When "Üye Olmadan Devam Et" butonuna tıkladığında
    Then "Adres Bilgileri" başlığını taşıyan adres formu sayfası yüklenmelidir
    And formda Ad Soyad, E-posta, Cep Telefonu, İl, İlçe, Mahalle ve Adres alanları bulunmalıdır

  Scenario: AC5 - Adres formunda zorunlu alanlar için negatif doğrulama
    Given kullanıcı misafir adres formundadır
    When Ad Soyad alanını boş bıraktığında
    And "Devam Et" butonuna tıkladığında
    Then ilgili alanın içerisinde kırmızı renkte "Lütfen bu alanı doldurunuz." uyarısı gösterilmelidir

  Scenario: AC6 - Adres formunun başarıyla gönderilmesi
    Given kullanıcı misafir adres formundadır
    When tüm zorunlu alanları geçerli bilgilerle doldurduğunda
    And "Adresi Kaydet" butonuna tıkladığında
    Then ödeme seçeneklerinin bulunduğu bir sonraki adıma başarıyla geçebilmelidir