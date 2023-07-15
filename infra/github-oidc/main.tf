provider "aws" {
  region = var.region
  default_tags {
    tags = {
      "andriymykhaylyk.com/provisioner" = "Terraform"
      "andriymykhaylyk.com/project"     = "Personal Website"
    }
  }
}

locals {
  bucket_name = "personal.hosting.public"
}

data "aws_iam_policy_document" "s3_manager_document" {
  statement {
    actions = [
      "s3:*",
    ]
    resources = [
      "arn:aws:s3:::${local.bucket_name}",
      "arn:aws:s3:::${local.bucket_name}/*",
    ]
  }
}

resource "aws_iam_policy" "s3_manager" {
  name   = "s3-manager"
  path   = "/"
  policy = data.aws_iam_policy_document.s3_manager_document.json
}

module "oidc_github" {
  source  = "unfunco/oidc-github/aws"
  version = "~> 1"

  attach_read_only_policy = false
  iam_role_policy_arns = [
    aws_iam_policy.s3_manager.arn,
  ]

  github_repositories = [
    "erplsf/personal:ref:refs/heads/main",
  ]
}
