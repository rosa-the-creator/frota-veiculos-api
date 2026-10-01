class VeiculoService {
    async getAll() {
        const res = await pool.query("SELECT*");
        return res.rows;
    }

    async creats(dados) {
        const res = await pool.query("INSERT  INTO... RETURNING *", [dados]);
        return res.rows(0);
    }
}