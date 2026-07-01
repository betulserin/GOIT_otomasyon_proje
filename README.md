# Kitapsepeti Otomasyon Test Projesi

Bu proje, Cypress kullanılarak uçtan uca (E2E) test otomasyon senaryolarını içermektedir.

## Mimari Yapı
Projede kod tekrarını önlemek ve bakımı kolaylaştırmak adına POM (Page Object Model) tasarım deseni kullanılmıştır.
- cypress/e2e/: BDD (Gherkin) formatındaki senaryolara bağlı kalarak oluşturulmuş test adımlarını içerir.
- cypress/pages/: Sayfalara ait web elementlerini (locator) ve metodları barındıran sayfa sınıflarını içerir.
