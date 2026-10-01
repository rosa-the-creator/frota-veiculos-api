class VeiculoSevice {
    async getAll() {
        const res = await poolquery("SELECT*");
        return res.rows;
    }

    async creats(dados) {
        const res = await pool.query("INSERT  INTO... RETURNING *", [dados...]);
        return res.rows(O);
    }
}