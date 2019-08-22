<template>
  <div id="modal-law" class="modal fade" style="background-color: rgba(0,0,0,0.2)">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <!-- modal-header -->
        <div class="modal-header">
          <h3>Polityka prywatności i nota prawna</h3>
        </div>
        <!-- modal-header -->
        <!-- modal-body -->
        <div class="modal-body">
          <p>
            Użytkownik Serwisu może korzystać z treści zawartych w Serwisie wyłącznie w zakresie osobistego użytku.
            Kopiowanie, wprowadzanie zmian, przesyłanie, publiczne odtwarzanie i wszelkie wykorzystywanie treści Serwisu do celów komercyjnych jest zabronione.
          </p>
          <p>
            Użytkownik zobowiązuje się, iż korzystanie przez niego za pośrednictwem Serwisu z materiałów chronionych prawami autorskimi na rzecz osób trzecich, w tym ich kopiowanie, przesyłanie i publiczne udostępnianie w Internecie odbywa się za zgodą uprawnionych osób.
          </p>
          <p>
            Cytowane w Serwisie wybrane tłumaczenia Biblii są objęte prawami autorskimi, o których poniżej:
          </p>
          <ul>
            <li>Biblia Warszawska — Towarzystwo Biblijne w Polsce, Warszawa;</li>
            <li>Uwspółcześniona Biblia Gdańska — Fundacja Wrota Nadziei, Toruń, Prawa autorskie nie zastrzeżone;</li>
            <li>Przekład Dosłowny EIB - Liga Biblijna w Polsce;</li>
            <li>Russian Synodal Version - brak danych;</li>
          </ul>
          <div class="text-center py-2 text-muted">
            <i class="fa fa-fw fa-gavel" style="font-size: 40px;  "></i>
          </div>
        </div>
        <!-- modal-body -->
        <!-- modal-footer -->
        <div class="modal-footer justify-content-start">
          <button @click="$root.config.showLaw = false" type="button" class="btn btn-secondary">
            <i class="fa fa-times fa-fw"></i>
            Zamknij
          </button>
        </div>
        <!-- modal-footer -->
      </div>
      <!-- modal-content -->
    </div>
    <!-- modal-dialog -->
  </div>
</template>

<script>
export default {}
</script>
