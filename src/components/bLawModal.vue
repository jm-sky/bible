<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'
import { useOptionsStore } from '@/stores/options'

const options = useOptionsStore()

</script>

<template>
  <TransitionRoot appear :show="options.showLawModal" as="template">
    <Dialog
      as="div"
      :open="options.showLawModal"
      class="relative z-10"
      @close="options.closeLawModal()"
    >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25 backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full max-w-xl overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="border-b p-4 text-xl font-semibold leading-6 text-gray-900">
                Polityka prywatności i nota prawna
              </DialogTitle>

              <div class="space-y-2 p-4">
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

              <div class="my-3 text-center text-muted">
                <i class="fa-solid fa-fw fa-gavel fa-2x" />
              </div>

              <div class="border-t p-4">
                <button type="button" class="btn btn-light w-full" @click="options.closeLawModal()">
                  <i class="fa-solid fa-times fa-fw" />
                  Zamknij
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
