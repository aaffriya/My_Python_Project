function Empdata() {
    return {
        addMode: true,
        formData: {
            fullName: '',
            email: '',
            city: '',
            mobile: ''
        },

        submitData() {
            url = 'http://127.0.0.1:3000/'
            fetch(url, {
                method: "post",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.formData),
            })
            location.reload()
        },

        editData(data) {
            this.addMode = false
            this.formData.fullName = data.fullName
            this.formData.email = data.email
            this.formData.mobile = data.mobile
            this.formData.city = data.city
            this.formData._id = data._id
        },

        updateData() {
            url = 'http://127.0.0.1:3000/'
            fetch(url, {
                method: "post",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.formData),
            })
            location.reload()
        },

        cancelEdit() {
            this.resetForm()
        },

        resetForm() {
            this.formData.fullName = ''
            this.formData.email = ''
            this.formData.mobile = ''
            this.formData.city = ''
            this.addMode = true
        },

        deleteData(_id) {
            url = 'http://127.0.0.1:3000/delete/' + _id
            fetch(url, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            }).then(() => alert("Successful !"))
            location.reload()
        }
    }
}
