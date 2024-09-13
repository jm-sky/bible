<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from '@headlessui/vue'
import { useOptionsStore } from '@/stores/options'

const options = useOptionsStore()

</script>

<template>
  <Dialog :open="options.showLawModal" @close="options.showLawModal = false">
    <DialogPanel>
      <DialogTitle>
        <h3>Polityka prywatności i nota prawna</h3>
      </DialogTitle>
      <DialogDescription>
        This will permanently deactivate your account
      </DialogDescription>

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
      <ul>
        <li>Biblia Warszawska — Towarzystwo Biblijne w Polsce, Warszawa;</li>
        <li>Uwspółcześniona Biblia Gdańska — Fundacja Wrota Nadziei, Toruń, Prawa autorskie nie zastrzeżone;</li>
        <li>Przekład Dosłowny EIB - Liga Biblijna w Polsce;</li>
        <li>Russian Synodal Version - brak danych;</li>
      </ul>
      <div class="py-2 text-center text-muted">
        <i class="fa-regular fa-fw fa-gavel" style="font-size: 40px;" />
      </div>

      <button type="button" class="btn" @click="options.showLawModal = false">
        <i class="fa-regular fa-times fa-fw" />
        Zamknij
      </button>
    </DialogPanel>
  </Dialog>
</template>
