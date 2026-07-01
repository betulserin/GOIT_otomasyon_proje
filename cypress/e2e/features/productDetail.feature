Feature: User Story - 03 - Ürün Detay Sayfası Görüntüleme ve Sepete Ekleme

  Scenario: Ürün Detay Sayfasına Yönlendirme ve Bilgilerin Kontrolü (AC1 & AC2 & AC3 - Pozitif)
    Given Kullanıcı Kitapsepeti ana sayfasını açar.
    When Arama çubuğuna geçerli bir kitap adı yazıp aratır.
    And Listelenen ilk ürünün görseline veya ismine tıklar.
    Then O ürüne özel detay sayfasına yönlendirildiği doğrulanır.
    And Ürün detay sayfasında ürün adı, yazar, yayınevi ve fiyat bilgilerinin belirgin gösterildiği görülür.
    And "Ürün Hakkında Bilgiler" bölümünde Türü, ISBN, Sayfa Sayısı gibi teknik detayların yer aldığı doğrulanır.

  Scenario: Ürünü Sepete Ekleme ve Sayaç Güncellemesi (AC4 & AC5 & AC6 - Pozitif)
    Given Kullanıcı Kitapsepeti ana sayfasını açar.
    When Arama çubuğuna geçerli bir kitap adı yazıp aratır.
    And Listelenen ilk ürünün görseline veya ismine tıklar.
    And Fiyat bilgisinin altındaki "Sepete Ekle" butonuna tıklar.
    Then Ekranda "Ürün başarıyla sepete eklendi" onay mesajının belirdiği doğrulanır.
    And "Sepete Git" ve "Satın Al" butonlarının görünür olduğu kontrol edilir.
    And Sağ üst köşedeki sepet ikonunda bulunan ürün sayısının '1' arttığı doğrulanır.

  Scenario: Geçersiz Ürün Linki ile Detay Sayfası Denemesi (AC_Negatif - Negatif)
    Given Kullanıcı doğrudan sistemde var olmayan geçersiz bir ürün URL'ine gider.
    Then Sayfanın yüklenmediği veya ekranda "Ürün Bulunamadı / 404" hata uyarısının belirdiği doğrulanır.