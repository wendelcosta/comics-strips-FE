terraform {
  backend "remote" {
    organization = "wendelCosta"

    workspaces {
      name = "comics_ui"
    }
  }
}
