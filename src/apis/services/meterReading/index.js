import ApiService from "@/apis/api";

export const MeterReadingService = {
    query(type, params) {
        return ApiService.query("meter-reading" + (type === "feed" ? "/feed" : ""), {
            params: params
        });
    },
    getAll(tenantId) {
        return ApiService.getAll(`/api/meter-readings/${tenantId}/get`);
    },
    get(id) {
        return ApiService.get(`/api/meter-reading/${id}/get`, id);
    },
    create(params) {
        return ApiService.post("/api/meter-reading/create",  params );
    },
    update(slug, params) {
        return ApiService.update("/api/meter-reading/update", slug, { rate: params });
    },
    destroy(slug) {
        return ApiService.delete(`/api/meter-reading/${slug}`);
    }
};
