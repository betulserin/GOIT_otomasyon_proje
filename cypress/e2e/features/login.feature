•  Scenario: Giriş Popup Elementlerinin Kontrolü (AC1 & AC2 - Pozitif)
•	Given Kullanıcı Kitapsepeti ana sayfasını açar.
•	When Sağ üstteki avatar ikonuna tıklar.
•	Then Giriş popup'ının açıldığı doğrulanır.
•	And E-posta alanı, Şifre alanı, "Şifremi Unuttum", "Beni Hatırla", "Giriş Yap" ve "Kayıt Ol" butonlarının görünür olduğu doğrulanır.
•  Scenario: Geçersiz E-posta Formatı ile Giriş Denemesi (AC6 - Negatif)
•	Given Kullanıcı Kitapsepeti ana sayfasını açar.
•	When Avatar ikonuna tıklayıp e-posta alanına geçersiz bir format (Örn: "ravzamira_test.com") yazar.
•	And Şifre girip "Giriş Yap" butonuna basar.
•	Then Ekranda "Giriş bilgileriniz hatalı" uyarı mesajının belirdiği doğrulanır.
•  Scenario: Boş Alanlar ile Giriş Denemesi (AC7 - Negatif)
•	Given Kullanıcı Kitapsepeti ana sayfasını açar.
•	When E-posta ve şifre alanlarını boş bırakarak "Giriş Yap" butonuna basar.
•	Then Ekranda "Giriş bilgileriniz hatalı" uyarı mesajının belirdiği doğrulanır.
•  Scenario: Şifremi Unuttum Navigasyonu (AC9 - Pozitif)
•	Given Kullanıcı Kitapsepeti ana sayfasını açar.
•	When Avatar ikonuna tıklayıp giriş popup'ındaki "Şifremi Unuttum" linkine tıkla.
•	Then Şifre sıfırlama sayfasına yönlendirildiği doğrulanır.
•	And Bu sayfada E-posta giriş alanı ile "Şifremi Hatırlat" butonunun olduğu görülür.