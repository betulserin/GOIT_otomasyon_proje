Feature: User Story 02 - Urun Arama, Filtreleme ve Urun Karti Fonksiyonlari

  Background:
    Given Kullanici Kitapsepeti ana sayfasini ziyaret eder

  Scenario: AC1 - Gecerli Urun Arama ve Kriterlerin Dogrulanmasi (Pozitif)
    When Kullanici arama cubuguna en az 1 karakter olan "Nutuk" yazip aratir
    Then Arama sonuclari sayfasinin "/arama" veya "ara" icerdigi dogrulanir
    And Arama kriterine uygun urunlerin listelendigi gorulur
    And Arama kelimesinin arama kutusundan silindigi dogrulanir

  Scenario: AC2 - Gecersiz Urun Arama (Negatif)
    When Kullanici sistemde bulunmayan "asdfqwert" kelimesiyle arama yapar
    Then Sayfada herhangi bir uygun urun olmadigi uyarisi dogrulanir

  Scenario: AC3 - Urun Karti Bilgileri ve Hover Aksiyonu Kontrolu
    When Kullanici arama sonuclari sayfasini inceler
    Then Her bir urun kartinda Urun Gorseli, Urun Adi, Yayinevi ve Fiyat bilgilerinin eksiksiz oldugu dogrulanir
    And Fiyat uzerine hover yapinca "Sepete Ekle" butonunun aktif hale geldigi kontrol edilir

  Scenario: AC4 - Siralama Menusu Seceneklerinin Kontrolu
    When Kullanici arama sonuclari sayfasinin sag ustundeki Siralama menusune tiklar
    Then Menude "Varsayilan Siralama", "Yeniden eskiye", "Eskiden yeniye", "Fiyat Artan", "Fiyat Azalan" secenekleri listelenmelidir

  Scenario: AC5 - Sol Panel Filtreleme Kontrolu
    When Kullanici sol taraftaki filtreleme panelini inceler
    Then Panelde "Kategoriler", "Marka" ve "Model" filtrelerinin uygulanabilir oldugu dogrulanir

  Scenario: AC6 - Hazir Kategorilerden Urun Secimi ve Scroll Ile Yeni Sayfa Yuklenmesi
    When Kullanici ana sayfadaki hazir ust kategorilerden birine tiklar
    Then Tiklanilan kategori isminin urunlerin uzerindeki baslikla ayni oldugu dogrulanir
    And Kullanici asagi scroll yaptiginda yeni sayfanin yuklendigi gorulur