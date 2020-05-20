import ApiService from "@/apis/api";

export const TenantsService = {
    query(type, params) {
        return ApiService.query("tenants" + (type === "feed" ? "/feed" : ""), {
            params: params
        });
    },
    getAll() {
        return ApiService.getAll("/api/tenants");
    },
    get(tenantId) {
        return ApiService.get(`/api/tenant/${tenantId}/get`);
    },
    create(params) {
        return ApiService.post("/api/tenant/create",  params );
    },
    update(slug, params) {
        return ApiService.update("/api/tenant/update", slug, { tenant: params });
    },
    destroy(id) {
        return ApiService.post('/api/tenant/delete', { id: id });
    }
};
