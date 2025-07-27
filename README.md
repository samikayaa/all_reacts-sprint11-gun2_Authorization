# Authorization_s11d2

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/asyaisbil/Authorization_s11d2)

Gün Projesi: Friends Database
0%
Sosyal Medya hesaplarında Workintech ile ilgili yazdığın bir yazıyı gören biri de senin gibi Workintech'de eğitim almaya başlamış.

Geçen gün sana ulaştı ve beraber kahve içmeye gittiniz. Sana süper bir fikri olduğunu söyledi. Bir platform kurmak istiyor. Üye olanlar arkadaşlarını da ekleyebilecek. Mesaj atabilecek, istediği bir yazıyı post edebilecek. Başkalarının yazdıklarını görebilecek.

Sana çok tanıdık geldi :) Hayalindeki fikri öyle bir anlattı ki, gözünde canlandı: https://player.vimeo.com/video/907738862
Kendi de bir şeyler yapmaya başlamış ama tam tamamlayamamış. Senden de eksik yerlerde yardımcı olmanı istedi. Beraber oturup listeyi hazırladınız.

ADIM 1: Routing ekle.

[ ] main.jsx dosyasında uygulamayı BrowserRouter ile sarmala.
[ ] App.jsxde routeları ekle.
[ ] /friends FriendsList componentini render etsin.
[ ] /login LoginForm componetini render etsin.
[ ] /friends/add AddForm componentini render etsin.
[ ] / FriendsList componentini render etsin.
ADIM 2: LoginForm componentini oluştur.

[ ] AddFriend.jsx'den bakabilirsin. Tasarım
[ ] username inputunda placeholder Username olsun.
[ ] password inputunda placeholder Password olsun.
[ ] submit butonunda metin olarak SUBMIT yazsın.
[ ] Form submit edildiğinde https://nextgen-project.onrender.com/api/s11d2/logine form datasını POST etsin.
[ ] Test için username: workintech ve password: wecandoiti kullan.
ADIM 3: AuthContext oluştur.

[ ] contexts klasörü yaratıp içinde AuthContext.jsx dosyası oluştur.
[ ] AuthContext adıyla bir context create et.
[ ] AuthContext.Provider return eden AuthContextProvider isimli Context Provider componenti oluştur.
[ ] İçinde Auth için gerekli fonksiyonları ve state değişkenlerini tanımla. (login post, isLoggedIn, authUserInfo v.b.)
[ ] AuthContext.Providera bunları value olarak vermeyi unutma.
[ ] App.jsxde uygulamayı bu provider ile sarmala.
ADIM 4:

[ ] hooks klasörü içinde tanımlı useLocalStorage hookunu kullanarak gerekli bilgileri s11d2 anahtarı ile localstorageda sakla ve gerekli durumlarda al.
ADIM 5:

[ ] Header.jsxde kullanıcı authenticated değil ise sadece LOGIN butonunu göster. authenticated ise FRIENDS LIST, ADD FRIEND, LOGOUT butonu göster.
[ ] butonların ilgili routeları açmasını sağla.
ADIM 6: FriendsList componentinde listeyi göster.

[ ] Tasarım
[ ] https://nextgen-project.onrender.com/api/s11d2/friends adresine GET isteği at.
[ ] requestin headerında authorization anahtarının değeri olarak token bilgisini gönder
[ ] gelen datayı ekranda göster.
ADIM 7:

[ ] AddFriend.jsxde yeni arkadaş için atılan isteğin headerında loginden gelen tokenı gönder.
ADIM 8:

[ ] component klasörü içinde PrivateRoute.jsx isminde Protected route componenti oluştur.
[ ] authenticated user değilse /login sayfasına Redirect et.