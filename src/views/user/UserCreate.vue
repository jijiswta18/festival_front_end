<template>
    <div>
        {{item}}
        <div  data-app>
            <v-card
                class="mx-auto"
            >
        
                <v-toolbar flat>
                    <v-toolbar-title>สร้างผู้ใช้งาน</v-toolbar-title>
                </v-toolbar>
                <v-divider></v-divider>
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                    >
                        <v-card-text >
                                        
                        
                            <v-row align="center">
                                <v-col
                                    class="d-flex"
                                    cols="12"
                                    sm="6"
                                >
                                    <v-text-field
                                        v-model="username"
                                        :rules="usernameRules"
                                        label="รหัสผู้ใช้งาน"
                                        hide-details="auto"
                                        dense
                                        outlined
                                        clearable
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    class="d-flex"
                                    cols="12"
                                    sm="6"
                                >
                                    <v-text-field
                                        v-model="password"
                                        :rules="passwordRules"
                                        label="รหัสผ่าน"
                                        hide-details="auto"
                                        dense
                                        outlined
                                        clearable
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    class="d-flex"
                                    cols="12"
                                    sm="6"
                                >
                                    <v-text-field
                                        v-model="name"
                                        :rules="nameRules"
                                        label="ชื่อ"
                                        hide-details="auto"
                                        dense
                                        outlined
                                        clearable
                                        thai_engLanguage
                                        maxlength="30"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    class="d-flex"
                                    cols="12"
                                    sm="6"
                                >
                                    <v-text-field
                                        v-model="lastname"
                                        :rules="lastnameRules"
                                        label="นามสกุล"
                                        hide-details="auto"
                                        dense
                                        outlined
                                        clearable
                                        thai_engLanguage
                                        maxlength="30"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    class="d-flex"
                                    cols="12"
                                    sm="6"
                                >
                                    <v-text-field
                                        v-model="position"
                                        :rules="positionRules"
                                        label="ตำเเหน่ง"
                                        hide-details="auto"
                                        dense
                                        outlined
                                        clearable
                                        thai_engLanguage
                                        maxlength="30"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    class="d-flex"
                                    cols="12"
                                    sm="6"
                                >
                                    <v-select
                                        v-model="divisions"
                                        :items="selectDivisions"
                                        :rules="rules.divisionsRules"
                                        item-text="value"
                                        item-value="id"
                                        label="หน่วยงาน"
                                        dense
                                        outlined
                                    ></v-select>
                                </v-col>

                                <v-col
                                    class="d-flex"
                                    cols="12"
                                    sm="6"
                                >
                                    <v-select
                                    v-model="roles"
                                    :items="selectRoles"
                                    :rules="rules.rolesRules"
                                    item-text="value"
                                    item-value="id"
                                    label="ประเภทสิทธิ์การใช้งาน"
                                    dense
                                    outlined
                                    ></v-select>
                                </v-col>

                                <v-col
                                    class="d-flex"
                                    cols="12"
                                    sm="6"
                                >
                                <v-textarea
                                    outlined
                                    name="input-7-4"
                                    label="หมายเหตุ"
                                    v-model="detail"
                                    ></v-textarea>
                                </v-col>


                            </v-row>
                        </v-card-text>
                        <v-toolbar flat class="box-button">
                            <v-btn
                                class="btn btn-submit mr-2"
                                text
                                @click="saveUser"
                            >
                                บันทึก
                            </v-btn>
                                <v-btn
                                class="btn btn-cancel"
                                text
                                @click="cancel"
                            >
                                ยกเลิก
                            </v-btn>
                        </v-toolbar>

                    </v-form>
            </v-card>
        </div>
    </div>
   
</template>
<script>
    import  axios  from "axios";
    export default {
         props: ['item'],
        data: () => ({
            valid: true,
            username: '',
            password: '',
            name: '',
            lastname: '',
            position: '',
            detail: '',
            roles: { value: '', id: null },
            selectRoles: [
                { value: 'ผู้ดูเเลระบบ', id: 'ผู้ดูเเลระบบ' },
                { value: 'ผู้ใช้งานระดับสูง', id: 'ผู้ใช้งานระดับสูง' },
            ],
            divisions: { value: '', id: null },
            selectDivisions: [
                { value: 'ศทส', id: '1' },
                { value: 'สล', id: '2' },
            ],
            usernameRules: [
                v => !!v || 'กรุณากรอกรหัสเข้าใช้งาน',
            ],
            passwordRules: [
                v => !!v || 'กรุณากรอกรหัสผ่าน',
            ],
            nameRules: [
                v => !!v || 'กรุณากรอกชื่อ',
                v =>/^[a-zA-Zก-ฮะ-์\s]+$/.test(v) ||` ห้ามกรอกอักขระพิเศษ เเละตัวเลข`
            ],
            lastnameRules: [
                v => !!v || 'กรุณากรอกนามสกุล',
                v =>/^[a-zA-Zก-ฮะ-์\s]+$/.test(v) ||` ห้ามกรอกอักขระพิเศษ เเละตัวเลข`
            ],
            positionRules: [
                v => !!v || 'กรุณากรอกตำเเหน่ง',
                v =>/^[a-zA-Zก-ฮะ-์\s]+$/.test(v) ||` ห้ามกรอกอักขระพิเศษ เเละตัวเลข`
            ],
            rules:{
                divisionsRules: [(v) =>  v.length>0 || "เลือกประเภทหน่วยงาน"],
                rolesRules: [(v) =>  v.length>0 || "เลือกประเภทสิทธิ์การใช้งาน"],
            }
               
            
        }),
        created(){
            // console.log(this.$route.query);
            
        },
        methods: {
            async saveUser(){
                this.$refs.form.validate()
                let fd = {
                    "username" : this.username,
                    "password" : this.password,
                    "name" : this.name,
                    "lastname" : this.lastname,
                    "position" : this.position,
                    "divisions" : this.divisions,
                    "detail" : this.detail,
                    "roles": this.roles
                }
                try {
                    let path = await `/api/createUser`
                    let res = await axios.post(`${path}`, fd)
                    console.log(res);
                } catch (error) {
                    console.log('error :' + error)
                }
            },
            cancel(){
                 this.$router.push('/user')
            }
        }
    }

</script>
<style>
    .box-button .v-toolbar__content{
        justify-content: center;
    }
</style>
