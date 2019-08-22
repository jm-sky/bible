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
                    <div class="d-inline-block">
                      <input v-model="$root.config.highContrast" :value="false" type="radio" id="highContrast-FALSE" class="form-check-input">
                      <label class="form-check-label" for="highContrast-FALSE">Normalny</label>
                    </div>                  
                    <div class="d-inline-block">
                      <input v-model="$root.config.highContrast" :value="true" type="radio" id="highContrast-TRUE" class="form-check-input">
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
                    <a @click="$root.fontSizeDown" class="btn btn-light border"><i class="fa fa-fw fa-minus"></i></a>
                  </div>
                  <input v-model="$root.config.fontSize" type="number" readonly class="form-control text-center" id="fontSize-input" />
                  <div class="input-group-append">
                    <a @click="$root.fontSizeUp" class="btn btn-light border"><i class="fa fa-fw fa-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <!-- form-group row -->
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Typ czcionki</label>
              <div class="col-sm-9">
                <div class="pt-2 form-check form-check-inline d-flex justify-content-around">
                    <div class="d-inline-block">
                      <input v-model="$root.config.fontTypeSerif" :value="false" type="radio" id="fontTypeSerif-FALSE" class="form-check-input">
                      <label class="form-check-label" for="fontTypeSerif-FALSE">Bezszeryfowa</label>
                    </div>                  
                    <div class="d-inline-block">
                      <input v-model="$root.config.fontTypeSerif" :value="true" type="radio" id="fontTypeSerif-TRUE" class="form-check-input">
                      <label class="form-check-label" for="fontTypeSerif-TRUE">Szeryfowa</label>
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
          <button @click="$root.config.showOptions = false" type="button" class="btn btn-secondary">
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
