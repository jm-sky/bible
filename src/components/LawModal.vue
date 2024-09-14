<script setup lang="ts">
import BaseModal from './BaseModal.vue'

const isOpen = defineModel<boolean>('isOpen', { required: true })
</script>

<template>
  <BaseModal v-model:is-open="isOpen" title="Polityka prywatności i nota prawna">
    <div class="space-y-2 p-5">
      <p>
        Użytkownik Serwisu może korzystać z treści zawartych w Serwisie wyłącznie w zakresie osobistego użytku.
        Kopiowanie, wprowadzanie zmian, przesyłanie, publiczne odtwarzanie i wszelkie wykorzystywanie treści Serwisu
        do celów komercyjnych jest zabronione.
      </p>
      <p>
        Użytkownik zobowiązuje się, iż korzystanie przez niego za pośrednictwem Serwisu z materiałów chronionych
        prawami autorskimi na rzecz osób trzecich, w tym ich kopiowanie, przesyłanie i publiczne udostępnianie w
        Internecie odbywa się za zgodą uprawnionych osób.
      </p>
      <p>
        Cytowane w Serwisie wybrane tłumaczenia Biblii są objęte prawami autorskimi, o których poniżej:
      </p>
      <ul class="ml-4 list-disc">
        <li>Biblia Warszawska — Towarzystwo Biblijne w Polsce, Warszawa;</li>
        <li>Uwspółcześniona Biblia Gdańska — Fundacja Wrota Nadziei, Toruń, Prawa autorskie nie zastrzeżone;</li>
        <li>Przekład Dosłowny EIB - Liga Biblijna w Polsce;</li>
        <li>Russian Synodal Version - brak danych;</li>
      </ul>
    </div>
  </BaseModal>
</template>
