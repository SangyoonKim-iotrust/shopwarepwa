<template>
  <div class="">
    <SfSelect
      v-if="options.length"
      v-model="selectedOption"
      :selected="selected"
      :label="label"
      class="sf-select--bordered product-details__attribute"
      @change="changeHandler(label, selectedOption)"
    >
      <SfSelectOption
        v-for="option in options"
        :key="option.code"
        :value="option.code"
       
      >
      <slot v-bind="option">
        <SfProductOption :label="option.label" :color="label=='color' ? option.label : null" />
      </slot>
      </SfSelectOption>
    </SfSelect>
  </div>
</template>
<script>
import { SfSelect, SfProductOption } from '@storefront-ui/vue'

export default {
  name: 'SwProductSelect',
  components: { SfSelect, SfProductOption },
  model: {
    prop: 'selected',
    event: 'select'
  },
  props: {
    changeHandler: {
      type: Function,
      default: () => {}
    },
    selected: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectedOption: this.selected
    }
  }
}
</script>
<style lang="scss" scoped></style>
