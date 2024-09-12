<script setup lang="ts">
import { useConfigStore } from '@/stores/config';

const config = useConfigStore()
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
              <label class="col-sm-3 col-form-label">Kontrast</label>
              <div class="col-sm-9">
                <div class="pt-2 form-check form-check-inline d-flex justify-content-around">
                  <div class="inline-block">
                    <input v-model="config.options.highContrast" :value="false" type="radio" id="highContrast-FALSE"
                      class="form-check-input">
                    <label class="form-check-label" for="highContrast-FALSE">Normalny</label>
                  </div>
                  <div class="inline-block">
                    <input v-model="config.options.highContrast" :value="true" type="radio" id="highContrast-TRUE"
                      class="form-check-input">
                    <label class="form-check-label" for="highContrast-TRUE">Wysoki</label>
                  </div>
                </div>
              </div>
            </div>
            <!-- form-group row -->
            <div class="form-group row">
              <label for="fontSize-input" class="col-sm-3 col-form-label">Rozmiar czcionki</label>
              <div class="col-sm-9">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <a @click="config.fontSizeDown()" class="btn btn-light border"><i
                        class="fa-regular fa-fw fa-minus"></i></a>
                  </div>
                  <input v-model="config.options.fontSize" type="number" readonly class="form-control text-center"
                    id="fontSize-input" />
                  <div class="input-group-append">
                    <a @click="config.fontSizeUp()" class="btn btn-light border"><i
                        class="fa-regular fa-fw fa-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <!-- form-group row -->
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Typ czcionki</label>
              <div class="col-sm-9">
                <div class="pt-2 form-check form-check-inline d-flex justify-content-around">
                  <div class="inline-block">
                    <input v-model="config.options.fontTypeSerif" :value="false" type="radio" id="fontTypeSerif-FALSE"
                      class="form-check-input">
                    <label class="form-check-label" for="fontTypeSerif-FALSE">Bezszeryfowa</label>
                  </div>
                  <div class="inline-block">
                    <input v-model="config.options.fontTypeSerif" :value="true" type="radio" id="fontTypeSerif-TRUE"
                      class="form-check-input">
                    <label class="form-check-label" for="fontTypeSerif-TRUE">Szeryfowa</label>
                  </div>
                </div>
              </div>
            </div>
            <!-- form-group row -->
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Kopiowana treść</label>
              <div class="col-sm-9">
                <div class="pt-2 form-check form-check-inline d-flex justify-content-around">
                  <div class="inline-block">
                    <input v-model="config.options.copyFormating" :value="false" type="radio" id="copyFormating-FALSE"
                      class="form-check-input">
                    <label class="form-check-label" for="copyFormating-FALSE">Nie formatuj</label>
                  </div>
                  <div class="inline-block">
                    <input v-model="config.options.copyFormating" :value="true" type="radio" id="copyFormating-TRUE"
                      class="form-check-input">
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
          <button @click="config.options.showOptions = false" type="button" class="btn btn-secondary">
            <i class="fa-regular fa-times fa-fw"></i>
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
