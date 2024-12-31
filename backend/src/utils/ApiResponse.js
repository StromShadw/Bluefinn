class ApiResponse {
  constructor(success, message = "Success", data) {
    this.success = success < 400;
    this.message = message;
    this.data = data;
  }
}