<template>
   <div id="app">
    <pre>
      {{desserts}}
    </pre>
      
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      class="elevation-1"
    >
 
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>รายการเทศกาล</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="mb-2 btn-create"
                v-bind="attrs"
                v-on="on"
              >
              สร้าง
              </v-btn>
            </template>

              <v-card>
                  <v-card-title class="title-festival">
                  <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>
            
                  <v-card-text>
                    <v-form
                      ref="form"
                      v-model="valid"
                      lazy-validation
                    >
                      <v-container>
                          <v-row>
                            <v-col cols="12">
                              <v-text-field
                                v-model="data.name"
                                :counter="10"
                                :rules="nameRules"
                                label="ชื่อเทศกาล"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-file-input
                                  show-size
                                  counter
                                  multiple
                                  label="เเนบรูปเทศกาล"
                                  v-model="data.file"
                                ></v-file-input>
                            </v-col>
                          </v-row>
                      </v-container>
                    </v-form>
                  </v-card-text>

                  <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      class="btn btn-cancel"
                      text
                      @click="close"
                  >
                      ยกเลิก
                  </v-btn>
                  <v-btn
                      class="btn btn-submit"
                      text
                      @click="save"
                  >
                      ตกลง
                  </v-btn>
                  </v-card-actions>
              </v-card>

          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>

  </div> 
</template>
<script>
  import Swal from 'sweetalert2'
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'วันที่จัดทำ',
          align: 'start',
          sortable: false,
          value: 'register_date',
        },
        { text: 'ชื่อเทศกาล', value: 'name_festival' },
        { text: 'ผู้ร้องขอ', value: 'create_by' },
        { text: 'สถานะ', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        register_date: '',
        name_festival: 0,
        create_by: 0,
        status: 0,
      },
      defaultItem: {
        register_date: '',
        name_festival: 0,
        create_by: 0,
        status: 0,
      },
      valid: true,
      data: {
        name: '',
        file: null
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'สร้างเทศกาล' : 'แก้ไขเทศกาล'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()

      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            id: '1',
            register_date: '21-09-2556',
            name_festival: 'วันฉัตรมลคล',
            create_by: 'สวิตตา ศรีจันทร์',
            status: 'ไม่ใช้งาน',
          },
          {
             id: '2',
            register_date: '21-09-2556',
            name_festival: 'วันเฉลิมพระชนมพรรษา พระบาทสมเด็จพระวิชรเกล้าเจ้าอยู่หัว',
            create_by: 'สวิตตา ศรีจันทร์',
            status: 'ไม่ใช้งาน',
          },
          {
            id: '3',
            register_date: '21-09-2556',
            name_festival: 'วันเฉลิมพระชนมพรรษา พระนางเจ้าสุทิดา พัชรสุธาพิมลลักษณ พระบรมราชินี',
            create_by: 'สวิตตา ศรีจันทร์',
            status: 'ใช้งาน',
          },
        ]
      },

      editItem (item) {
        console.log(item);
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

    save () {  
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {

        if(this.data.name){
            this.desserts.push({
              'register_date' : '22-06-2565',
              'name_festival' : this.data.name,
              'create_by' : 'สวิตตา ศรีจันทร์',
              'status' : 'ใช้งาน',
            })
            this.dialog = false
          }else{
            this.$refs.form.validate()
          }
        }
        // this.close()
      },
    },
  }
</script>
<style>
    .v-data-table-header{
        background-color: #0170c2;
    }
    th span{
           color: white!important;
    }
    .title-festival{
        border-bottom: 2px solid #0170c2;
    }
    .btn-create{
        background-color: #213862!important;
        border: 1px solid #213862;
        color: white!important;
    }
    /* .btn-submit{
        background-color: #0170c2;
        border: 1px solid #0170c2;
        color: white!important;
    }
    .btn-cancel{
        color: #0170c2!important;
        border: 1px solid #0170c2;
        margin-right: 0.5rem;
    } */
</style>