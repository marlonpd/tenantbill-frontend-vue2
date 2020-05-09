import ApiService from "@/apis/api";

export const PowerRateService = {
    query(type, params) {
        return ApiService.query("power-rates" + (type === "feed" ? "/feed" : ""), {
            params: params
        });
    },
    getAll() {
        return ApiService.getAll("/api/power-rates/get");
    },
    get(slug) {
        return ApiService.get("/api/power-rate/get", slug);
    },
    create(params) {
        return ApiService.post("/api/power-rate/create",  params );
    },
    update(slug, params) {
        return ApiService.update("/api/power-rate/update", slug, { rate: params });
    },
    destroy(slug) {
        return ApiService.delete(`/api/power-rate/${slug}`);
    }
};
