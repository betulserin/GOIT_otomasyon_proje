Feature: User Story - 04 - Sepet Yönetimi ve Kontrolü

  Scenario: Sepete Erişim, Ürün Bilgileri ve Tutar Kontrolleri (AC1 & AC2 & AC3 & AC8 & AC9 & AC10 - Pozitif)
    Given Kullanıcı Kitapsepeti ana sayfasını açar.
    When Kullanıcı detay sayfasından veya ana sayfadan ürünü sepete ekler.
    And Sağ üst köşedeki sepet ikonuna veya açılan popup'taki "Sepete Git" butonuna tıklar.
    Then Sepet sayfasına (/sepet) başarıyla erişildiği doğrulanır.
    And Listelenen ürün için ürün adı, birim fiyat, adet ve toplam tutar bilgileri doğru olarak gösterilir.
    And Sağ taraftaki "Sepet Toplamı" bölümünde Sepet Toplamı, Kargo Ücreti ve Genel Toplamın doğru hesaplandığı görülür.
    And Sepette ürün varken "Satın Al" butonunun tıklanabilir olduğu doğrulanır.

  Scenario: Sepette Ürün Adedi Artırma (AC4 - Pozitif)
    Given Kullanıcı sepet sayfasına en az bir ürün ekleyerek giriş yapar.
    When Adet kutusunun yanındaki "+" butonuna basar.
    Then Ürün adedinin bir arttığı doğrulanır.
    And Hem o ürünün toplam tutarı hem de Genel Toplamın anında güncellendiği görülür.

  Scenario: Ürün Silme ve Sepeti Temizleme Kontrolü (AC5 & AC6 & AC7 - Pozitif)
    Given Kullanıcı sepet sayfasına ürün ekleyerek giriş yapar.
    When Ürün satırındaki çöp kutusu ikonuna tıklayıp onay ekranında sile tıklar.
    Or Kullanıcı ürünlerin sol altındaki "Sepeti Temizle" butonuna tıklar.
    Then Sayfanın güncellendiği ve "Sepetinizde ürün bulunmamaktadır." mesajının belirdiği görülür.
    And "Alışverişe Devam Et" butonunun ekranda görüntülendiği doğrulanır.

  Scenario: Boş Sepette Satın Alma Denemesi (AC_Negatif - Negatif)
    Given Kullanıcı sepetinde hiçbir ürün yokken doğrudan sepet sayfasına gider.
    Then "Satın Al" butonunun aktif olmadığı veya kullanıcının bir sonraki adıma geçmesinin engellendiği doğrulanır.