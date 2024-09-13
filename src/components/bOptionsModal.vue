<script setup lang="ts">
import { useOptionsStore } from '@/stores/options'

const options = useOptionsStore()
</script>

<template>
  <div id="modal-options" class="modal fade" style="background-color: rgba(0,0,0,0.2)">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <!-- modal-header -->
        <div class="modal-header">
          <h3>Opcje</h3>
        </div>
        <!-- modal-header -->
        <!-- modal-body -->
        <div class="modal-body">
          <form>
            <!-- form-group row -->
            <div class="form-group row">
              <label class="col-form-label w-3/12">Kontrast</label>
              <div class="w-9/12">
                <div class="form-check form-check-inline d-flex justify-content-around pt-2">
                  <div class="inline-block">
                    <input
                      id="highContrast-FALSE"
                      v-model="options.highContrast"
                      :value="false"
                      type="radio"
                      class="form-check-input"
                    >
                    <label class="form-check-label" for="highContrast-FALSE">Normalny</label>
                  </div>
                  <div class="inline-block">
                    <input
                      id="highContrast-TRUE"
                      v-model="options.highContrast"
                      :value="true"
                      type="radio"
                      class="form-check-input"
                    >
                    <label class="form-check-label" for="highContrast-TRUE">Wysoki</label>
                  </div>
                </div>
              </div>
            </div>
            <!-- form-group row -->
            <div class="form-group row">
              <label for="fontSize-input" class="col-form-label w-3/12">Rozmiar czcionki</label>
              <div class="w-9/12">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <a class="btn btn-light border" @click="config.fontSizeDown()"><i
                      class="fa-regular fa-fw fa-minus"
                    /></a>
                  </div>
                  <input
                    id="fontSize-input"
                    v-model="options.fontSize"
                    type="number"
                    readonly
                    class="form-control text-center"
                  >
                  <div class="input-group-append">
                    <a class="btn btn-light border" @click="config.fontSizeUp()"><i
                      class="fa-regular fa-fw fa-plus"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
            <!-- form-group row -->
            <div class="form-group row">
              <label class="col-form-label w-3/12">Typ czcionki</label>
              <div class="w-9/12">
                <div class="form-check form-check-inline d-flex justify-content-around pt-2">
                  <div class="inline-block">
                    <input
                      id="fontTypeSerif-FALSE"
                      v-model="options.fontTypeSerif"
                      :value="false"
                      type="radio"
                      class="form-check-input"
                    >
                    <label class="form-check-label" for="fontTypeSerif-FALSE">Bezszeryfowa</label>
                  </div>
                  <div class="inline-block">
                    <input
                      id="fontTypeSerif-TRUE"
                      v-model="options.fontTypeSerif"
                      :value="true"
                      type="radio"
                      class="form-check-input"
                    >
                    <label class="form-check-label" for="fontTypeSerif-TRUE">Szeryfowa</label>
                  </div>
                </div>
              </div>
            </div>
            <!-- form-group row -->
            <div class="form-group row">
              <label class="col-form-label w-3/12">Kopiowana treść</label>
              <div class="w-9/12">
                <div class="form-check form-check-inline d-flex justify-content-around pt-2">
                  <div class="inline-block">
                    <input
                      id="copyFormating-FALSE"
                      v-model="options.copyFormating"
                      :value="false"
                      type="radio"
                      class="form-check-input"
                    >
                    <label class="form-check-label" for="copyFormating-FALSE">Nie formatuj</label>
                  </div>
                  <div class="inline-block">
                    <input
                      id="copyFormating-TRUE"
                      v-model="options.copyFormating"
                      :value="true"
                      type="radio"
                      class="form-check-input"
                    >
                    <label class="form-check-label" for="copyFormating-TRUE">Formatuj</label>
                  </div>
                </div>
              </div>
            </div>
            <!-- form-group row -->
          </form>
        </div>
        <!-- modal-body -->
        <!-- modal-footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="options.showOptionsModal = false">
            <i class="fa-regular fa-times fa-fw" />
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
