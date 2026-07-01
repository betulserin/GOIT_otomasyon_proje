Feature: User Story - 05 - Ödeme ve Sipariş Onayı

  Scenario: Adres Adımından Ödeme Adımına Geçiş ve Kargo Seçeneklerinin Kontrolü (AC1 & AC2 & AC3 & AC4 & AC8 - Pozitif)
    Given Kullanıcı sepet sayfasına ürün ekleyerek giriş yapar.
    When Sepet sayfasındaki "Satın Al" butonuna tıklar.
    Then Kullanıcının "Adres bilgileri" sayfasına yönlendirildiği doğrulanır.
    When Kullanıcı adres sayfasındaki "Ödeme Adımına Geç" butonuna tıklar.
    Then Ödeme bilgileri ekranına başarıyla yönlendirildiği görülür.
    And Ödeme sayfasında "iyzico ile öde" ve "Kartla Ödeme" seçeneklerinin net bir şekilde sunulduğu doğrulanır.
    And Kargo seçenekleri olarak "PTT Kargo" ve "Hepsijet" firmalarının göründüğü kontrol edilir.
    And Kargo seçeneklerinde "PTT Kargo" seçeneğinin default olarak seçili geldiği doğrulanır.
    And Sayfanın sağ tarafında "Sipariş Özeti" kutusunun bulunduğu ve doğru genel toplam tutarını gösterdiği doğrulanır.

  Scenario: Kredi Kartı Formu Alanlarının Gösterilmesi ve Tam Doldurulduğunda Buton Aktivasyonu (AC5 & AC6 - Pozitif)
    Given Kullanıcı ödeme bilgileri ekranındadır.
    When Ödeme seçeneklerinden "Kartla Ödeme" seçeneğini seçer.
    Then Kart Üzerindeki Ad Soyad, Kart Numarası, Son Kullanma Tarihi (Ay/Yıl) ve CVV giriş alanlarının görünür olduğu doğrulanır.
    When Kullanıcı kredi kartı formundaki tüm alanları geçerli bilgilerle doldurur.
    Then Sayfadaki "xxx TL ÖDE" butonunun aktif ve mavi renkli hale geldiği doğrulanır.

  Scenario: Eksik Bilgilerle Ödeme Denemesi ve Hata Mesajı Kontrolü (AC7 - Negatif)
    Given Kullanıcı ödeme bilgileri ekranında "Kartla Ödeme" formundadır.
    When Kredi kartı formundaki bazı alanları eksik bırakır.
    And Aktif olmayan "xxx TL ÖDE" butonuna tıklamayı dener.
    Then Eksik bırakılan metin alanlarının altında kırmızı renkli "Lütfen tüm alanları doldurunuz" uyarı mesajının belirdiği doğrulanır.